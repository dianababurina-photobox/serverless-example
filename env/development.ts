import IEnvConfig from './env.interface';

const devConfig: IEnvConfig = {
  profile: 'photobox-dev',
  nodeEnv: 'development',
  serviceShortName: 'development',
  pruneRetention: 1,
};

export default devConfig;
