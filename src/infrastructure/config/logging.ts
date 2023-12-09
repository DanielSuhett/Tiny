import { Params } from 'nestjs-pino';
import { pino } from 'pino';
import { pinoHttp as PinoHttp } from 'pino-http';
import PinoPretty from 'pino-pretty';

const pinoConfig = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: true,
      minimumLevel: 'info',
      ignore: 'req.headers,res.headers',
    } as PinoPretty.PrettyOptions,
  },
});

export const pinoHttp = PinoHttp({
  logger: pinoConfig,
  autoLogging: true,
  log(object: any) {
    const { req, res, responseTime } = object;
    return {
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      responseTime,
    };
  },
});

export const loggerConfig: Params = {
  pinoHttp,
};
