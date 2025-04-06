import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="text-muted-foreground text-lg">
        We'd love to hear from you. Please use the information below to contact us or fill out the
        form.
      </p>

      <div className="space-y-6 mt-8">
        <Card>
          <CardContent className="flex items-start gap-4 p-6">
            <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Our Address</h3>
              <p className="text-muted-foreground mt-1">
                <a
                  href="https://maps.app.goo.gl/are9pjiGkR3yPGbU6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-green-600 ">
                  117 Telegraph Road
                  <br />
                  Bald Hills, Qld 4036
                  <br />
                  Australia
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-start gap-4 p-6">
            <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Phone Number</h3>
              <p className="text-muted-foreground mt-1">
                <a href="tel:+14155550123" className="hover:underline hover:text-green-600">
                  0431 477 025
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-start gap-4 p-6">
            <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Email Address</h3>
              <p className="text-muted-foreground mt-1">
                <a
                  href="mailto:contact@yourcompany.com"
                  className="hover:underline hover:text-green-600">
                  info@masjidtaqwa.org.au
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
