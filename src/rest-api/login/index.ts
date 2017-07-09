export * from './loginAPI.double';
import { config } from '../config';

if (config.useRealAPI) {
  console.log('using real api');
} else {
  console.log('using double');
}