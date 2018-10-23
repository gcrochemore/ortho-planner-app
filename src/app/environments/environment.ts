import * as _ from 'lodash';
import {config} from './config';

export const environment = _.merge(config,  {
    production: false,
    api: {
        url: 'http://localhost:3000'
    }
});
