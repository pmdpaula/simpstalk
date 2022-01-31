import { createClient } from '@supabase/supabase-js';

// eslint-disable-next-line import/no-unresolved
import { MessageProps } from '../components/Chat/MessageList/message';

// eslint-disable-next-line prefer-destructuring
const SUPABASE_URL = process.env.SUPABASE_URL || '';
// eslint-disable-next-line prefer-destructuring
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabaseClient;

export async function fetchMessagesOrderDescendingById() {
  const { data } = await supabaseClient
    .from<MessageProps>('messages')
    .select('*')
    .order('id', { ascending: false });

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return data;
  // setListaDeMensagens(data!);
}

// eslint-disable-next-line consistent-return
export async function deleteMessageById(id: number) {
  // eslint-disable-next-line no-unused-vars
  const { data, error } = await supabaseClient
    .from<MessageProps>('messages')
    .delete()
    .match({ id });

  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return null;
  }

  fetchMessagesOrderDescendingById();
}
