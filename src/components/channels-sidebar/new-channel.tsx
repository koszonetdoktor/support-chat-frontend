import { useMutation } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { createChannel } from "@/api/channels";
import { toast } from "sonner";

export function NewChannel() {
  const { mutate } = useMutation({
    mutationFn: (name: string) => createChannel(name),
    onError: () => {
      toast.error("Failed to create channel.");
    },
    onSuccess: () => {
      toast.success("Channel created.");
    },
  });

  const handleClick = () => {
    mutate("New Channel");
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      New
    </Button>
  );
}
