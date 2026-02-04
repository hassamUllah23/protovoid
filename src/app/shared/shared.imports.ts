import { Button, ButtonGroup, Card, Dot, Icon, Input, Link, Pill, Separator, Text, Timeline, Ul } from '@shared/components';

// Export all shared components as an array for easy importing
export const SHARED_COMPONENTS = [
  Button,
  Text,
  Card,
  Icon,
  Input,
  Dot,
  ButtonGroup,
  Image,
  Link,
  Pill,
  Separator,
  Ul,
  Timeline
];

// Export individual components for named imports
export { Button, ButtonGroup, Card, Dot, Icon, Input, Link, Pill, Separator, Text, Timeline, Ul };

// Legacy export for backward compatibility
export const SHARED = {
  COMPONENTS: SHARED_COMPONENTS
};