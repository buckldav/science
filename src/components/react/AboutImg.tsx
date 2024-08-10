import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutImg() {
  return (
    <Avatar className="mt-6">
      <AvatarImage src="https://www.dbuckley.dev/assets/images/me.jpg" />
      <AvatarFallback>DB</AvatarFallback>
    </Avatar>
  );
}
