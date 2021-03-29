import {proxiTest} from './client/proxiTest.js';
import {AkvarioTest} from './testClasses.js';
import {akvarioServerTest} from './server/akvarioServerTest.js';

const test = new AkvarioTest();

export function addTestSuite(testSuite){
    test.addSuite(testSuite);
}

akvarioServerTest();
proxiTest();




test.test();

