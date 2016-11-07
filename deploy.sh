SHA1=$1
ACCESS_ID=$2
SECRET=$3

# Create new Elastic Beanstalk version
EB_BUCKET=engauge-bucket
DOCKERRUN_FILE=Dockerrun.aws.json
EBEXTENSIONS=.ebextensions

sed "s/<TAG>/$SHA1/" < Dockerrun.aws.json.template > $DOCKERRUN_FILE
aws configure set default.region us-west-1
aws configure set aws_access_key_id $ACCESS_ID
aws configure set aws_secret_access_key $SECRET
# aws configure set aws_secret_access_key default_secret_key

zip -r $SHA1.zip $DOCKERRUN_FILE $EBEXTENSIONS
aws s3 cp $SHA1.zip s3://$EB_BUCKET/$SHA1.zip

aws elasticbeanstalk create-application-version --application-name engauge-app \
  --version-label $SHA1 --source-bundle S3Bucket=$EB_BUCKET,S3Key=$SHA1.zip

# Update Elastic Beanstalk environment to new version
aws elasticbeanstalk update-environment --environment-name engauge-prod \
    --version-label $SHA1