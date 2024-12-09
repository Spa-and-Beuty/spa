import { getManyMessages } from "@/data/contactMessage";
import { MessageListCard } from "@/components/admin/MessageListCard";
import { bitter } from "../../../../constants";
export const dynamic = "force-dynamic";

export default async function Page() {
  const messages = await getManyMessages();

  return (
    <section className={"px-10"}>
      <h1 className={`mb-20 text-2xl font-bold ${bitter.className}`}>
        Messages
      </h1>
      <div className={""}>
        {messages.map((message) => (
          <MessageListCard key={message.id} message={message} />
        ))}
      </div>
    </section>
  );
}
