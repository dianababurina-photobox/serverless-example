import path from 'path';

const BUILD_FOLDER = 'dist';
const HANDLER_PATH = 'handler.default';

export const handlerPath = (context: string, handlerName: string) => {
  return path.join(
    BUILD_FOLDER,
    `${context
      .split(process.cwd())[1]
      .substring(1)
      .replace(/\\/g, '/')}`,
    `${handlerName}.${HANDLER_PATH}`,
  );
};
