import * as _ from 'lodash';
import {config} from './config';

export const environment = _.merge(config,  {
    production: true,
    api: {
        url: 'www.monserveur-prod.com'
    }
});
