import IEnvConfig from './env.interface';

const prodConfig: IEnvConfig = {
  profile: 'photobox-production', // TBD
  nodeEnv: 'production',
  serviceShortName: 'production',
  pruneRetention: 3,
};

export default prodConfig;
