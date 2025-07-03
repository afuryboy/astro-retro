import { Button } from "@/components/retroui/Button";
import { Label } from "@/components/retroui/Label";
import { Input } from "@/components/retroui/Input";
import { useState } from "react";

export default function Contact() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  return (
    <form action={`mailto:iamfuryman@sina.com?subject=${subject}&body=${body}`} method="post">
      <div className="mb-6">
        <Label htmlFor="subject">subject</Label>
        <Input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Your Email" />
      </div>
      <div className="mb-6">
        <Label htmlFor="message">message</Label>
        <Input type="text" id="message" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Your Message" />
      </div>
      <Button type="submit" className="w-full justify-center">Send To Me</Button>
    </form>
  );
}
