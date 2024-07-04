import * as Clerk from '@clerk/elements/common';
import { Card, CardContent } from './ui/card';
import { Avatar } from './ui/avatar';


function CustomUserCard() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-6">
        <p className="mb-2">Hey 👋</p>
        <Clerk.UserAvatar />
        <Clerk.UserFullName className="mt-2 text-lg font-semibold" />
        <Clerk.UserEmailAddress className="text-sm text-gray-500" />
      </CardContent>
    </Card>
  );
}