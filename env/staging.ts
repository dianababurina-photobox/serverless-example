import IEnvConfig from './env.interface';

const stagingConfig: IEnvConfig = {
  profile: 'photobox-staging', // TBD
  nodeEnv: 'staging',
  serviceShortName: 'staging',
  pruneRetention: 1,
};

export default stagingConfig;
