SHA1=$1
ACCESS_ID=$2
SECRET=$3

# Deploy image to Docker Hub
docker push stolemyusername/engauge:$SHA1
# docker push stolemyusername/engauge:latest

# Create new Elastic Beanstalk version
EB_BUCKET=engaugeapp
DOCKERRUN_FILE=$SHA1-Dockerrun.aws.json

sed "s/<TAG>/$SHA1/" < Dockerrun.aws.json.template > $DOCKERRUN_FILE
aws configure set default.region us-west-1
aws configure set aws_access_key_id $ACCESS_ID
aws configure set aws_secret_access_key $SECRET
# aws configure set aws_secret_access_key default_secret_key
echo $ACCESS_ID $SECRET
aws s3 cp $DOCKERRUN_FILE s3://$EB_BUCKET/$DOCKERRUN_FILE
aws elasticbeanstalk create-application-version --application-name engauge \
  --version-label $SHA1 --source-bundle S3Bucket=$EB_BUCKET,S3Key=$DOCKERRUN_FILE

# Update Elastic Beanstalk environment to new version
aws elasticbeanstalk update-environment --environment-name engaugeapp-env \
    --version-label $SHA1

