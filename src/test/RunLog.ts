import 'mocha';
import {Logger, LogLevels} from '../telemetry';
import {Telemetry} from '..';

describe('Logging', () => {
  it('validate run log', () => {
    Telemetry.Configuration.Initialize(LogLevels.Verbose);
    Logger.Trace('Trace message');
    Logger.Warn('Warn message', {Id: 123});
    Logger.Error('Error message', {Id: 123});
  });
});
