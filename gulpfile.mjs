// Import Olympe dev-tools and initialise configuration.
import devTools from '@olympeio/dev-tools';
await devTools();

// Expose individual gulp tasks
export * from '@olympeio/dev-tools';
export {help as default} from '@olympeio/dev-tools'; 
