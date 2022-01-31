export interface MessageProps {
  id: number;
  created_at: string;
  from: string | string[] | undefined;
  msg_text: string;
}
