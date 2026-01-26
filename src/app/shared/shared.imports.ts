import { Button, Text } from '@shared/components';

// Export all shared components as an array for easy importing
export const SHARED_COMPONENTS = [
  Button,
  Text
];

// Export individual components for named imports
export { Button, Text };

// Legacy export for backward compatibility
export const SHARED = {
  COMPONENTS: SHARED_COMPONENTS
};