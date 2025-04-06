"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Copy, CreditCard, MessageCircle } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-green-700">Support Our Cause</h1>
        <p className="text-sm">
          On the authority of Abu Hurairah (ra) that the messenger of Allah (saw) said, 'When a
          person dies, his deeds come to an end except for three: Sadaqah Jariyah (continuous
          charity), or knowledge from which benefit is gained, or a righteous child who prays for
          him' - <span className="text-muted-foreground">Sahih Muslim</span>
        </p>
        <p className="text-sm">
          On the authority of Abu Hurairah (ra) who said, the Prophet (saw) said: Indeed, the
          rewards of his actions and good deeds that will reach a believer after his death are :
          knowledge which he taught and spread 2-a righteous child whom he leaves behind 3-a copy of
          the Quran that he leaves as a legacy 4-or a masjid that he built 5-or a house that he
          built for the wayfarers 6-a canal that he dug 7-or charity that he gave from his wealth in
          his good health and life. [These deeds] will reach him after his death -{" "}
          <span className="text-muted-foreground">Ibn Majah</span>
        </p>
        <p className="font-bold text-green-700">
          Masjid Taqwa is a not-for-profit organisation that runs on generous donations and
          contributions from the public. Please donate via eft into our Bank account:
        </p>
      </div>

      <div className=" w-1/2 mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Bank Details
            </CardTitle>
            <CardDescription>
              You can make a direct bank transfer using the details below
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="account-name">Account Name</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="account-name"
                  value="The Bald Hills Islamic Educational Organisation"
                  readOnly
                  className="bg-muted"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    navigator.clipboard.writeText("The Bald Hills Islamic Educational Organisation")
                  }
                  title="Copy to clipboard">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="account-number">Account Number</Label>
              <div className="flex items-center gap-2">
                <Input id="account-number" value="10434495" readOnly className="bg-muted" />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigator.clipboard.writeText("10434495")}
                  title="Copy to clipboard">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bank-name">Bank Name</Label>
              <div className="flex items-center gap-2">
                <Input id="bank-name" value="CBA" readOnly className="bg-muted" />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigator.clipboard.writeText("CBA")}
                  title="Copy to clipboard">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="swift-code">Bank BSB number</Label>
              <div className="flex items-center gap-2">
                <Input id="swift-code" value="064-155" readOnly className="bg-muted" />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigator.clipboard.writeText("064-155")}
                  title="Copy to clipboard">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
          {/* <CardFooter>
            <Button className="w-full" onClick={() => window.print()}>
              Print Details
            </Button>
          </CardFooter> */}
        </Card>

        {/* <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Sayings of the Prophet
            </CardTitle>
            <CardDescription> Virtues of charity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <blockquote className="border-l-4 pl-4 italic">
              "On the authority of Abu Hurairah (ra) that the messenger of Allah (saw) said, 'When a
              person dies, his deeds come to an end except for three: Sadaqah Jariyah (continuous
              charity), or knowledge from whcih benefit is gained, or a righteous child who prays
              for him'"
            </blockquote>
            <p className="text-sm text-muted-foreground">Sahih Muslim</p>

            <Separator className="my-4" />

            <div className="space-y-4">
              <p className="text-sm">
                On the authority of Abu Hurairah (ra) who said, the Prophet (saw) said: Indeed, the
                rewards of his actions and good deeds that will reach a believer after his death are
                :
                <ul>
                  <li>1-knowledge which he taught and spread</li>
                  <li>2-a righteous child whom he leaves behind</li>
                  <li>3-a copy of the Quran that he leaves as a legacy</li>
                  <li>4-or a masjid that he built</li>
                  <li>5-or a house that he built for the wayfarers</li>
                  <li>6-a canal that he dug</li>
                  <li>7-or charity that he gave from his wealth in his good health and life.</li>
                  [These deeds] will reach him after his death
                </ul>
              </p>
              <p className="text-sm text-muted-foreground">Ibn Majah</p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <p className="text-sm text-center">
              Your generosity today can change someone's tomorrow.
            </p>
            <Button variant="outline" className="w-full">
              Learn More About Our Work
            </Button>
          </CardFooter>
        </Card> */}
      </div>

      {/* <div className="text-center space-y-4 pt-6">
        <h2 className="text-xl font-semibold">Other Ways to Donate</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          If you prefer other methods of donation or have any questions, please contact us at{" "}
          <span className="font-medium">donations@example.org</span> or call us at{" "}
          <span className="font-medium">+1 (555) 123-4567</span>.
        </p>
        <Button variant="secondary">Contact Us</Button>
      </div> */}
    </div>
  );
}
