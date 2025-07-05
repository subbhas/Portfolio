import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Download, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { generateQRCode } from "@/lib/qrcode";
import { downloadVCard } from "@/lib/vcard";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  city: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const handleDownloadVCard = () => {
    downloadVCard();
    toast({
      title: "vCard downloaded",
      description: "Contact information saved to your device.",
    });
  };

  const handleGenerateQR = async () => {
    try {
      const contactData = `BEGIN:VCARD
VERSION:3.0
FN:Jayan Jayabal
TITLE:Entrepreneur & Wealth Advisor
TEL;TYPE=WORK,VOICE:+1-604-704-7972
URL:https://jayanjayabal.ca
item1.URL:https://www.linkedin.com/in/jayan-jayabal-20495b155/
item1.X-ABLabel:LinkedIn
END:VCARD`;
      
      const qrUrl = await generateQRCode(contactData);
      setQrCodeUrl(qrUrl);
    } catch (error) {
      toast({
        title: "Error generating QR code",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Start Your Financial Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your financial goals and your requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-sm border border-gray-100">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name"
                              className="bg-gray-100 border-0 focus:bg-white focus:ring-2"
                              style={{ '--tw-ring-color': '#0f2e35' } as any}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your@email.com"
                              className="bg-gray-100 border-0 focus:bg-white focus:ring-2"
                              style={{ '--tw-ring-color': '#0f2e35' } as any}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              placeholder="(604) 555-0123"
                              className="bg-gray-100 border-0 focus:bg-white focus:ring-2"
                              style={{ '--tw-ring-color': '#0f2e35' } as any}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Vancouver"
                              className="bg-gray-100 border-0 focus:bg-white focus:ring-2"
                              style={{ '--tw-ring-color': '#0f2e35' } as any}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4}
                            placeholder="Tell me about your financial goals..."
                            className="bg-gray-100 border-0 focus:bg-white focus:ring-2 resize-none"
                            style={{ '--tw-ring-color': '#0f2e35' } as any}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-primary"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {/* Contact Info & Actions */}
          <div className="space-y-8">
            <Card className="bg-white shadow-sm border border-gray-100">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mt-1 mr-3 w-5 h-5" style={{ color: '#0f2e35' }} />
                    <div>
                      <p className="text-gray-900 font-medium">Address</p>
                      <p className="text-gray-600">
                        142 Esplanade East<br />
                        North Vancouver, BC V7L 4X9
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-3 w-5 h-5" style={{ color: '#0f2e35' }} />
                    <div>
                      <p className="text-gray-900 font-medium">Phone</p>
                      <a href="tel:+16047047972" className="text-gray-600 hover:text-[#0f2e35] transition-colors">(604) 704-7972</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-3 w-5 h-5" style={{ color: '#0f2e35' }} />
                    <div>
                      <p className="text-gray-900 font-medium">Email</p>
                      <a href="mailto:jayan@wealthxfinancial.com" className="text-gray-600 hover:text-[#0f2e35] transition-colors">jayan@wealthxfinancial.com</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* vCard & QR Code */}
            <Card className="bg-white shadow-sm border border-gray-100">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={handleDownloadVCard}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download vCard
                  </Button>
                  
                  <div className="text-center">
                    <Button 
                      variant="outline"
                      onClick={handleGenerateQR}
                      className="mb-4"
                    >
                      <QrCode className="w-4 h-4 mr-2" />
                      Generate QR Code
                    </Button>
                    
                    {qrCodeUrl && (
                      <div className="inline-block p-4 bg-gray-100 rounded-lg">
                        <img 
                          src={qrCodeUrl} 
                          alt="Contact QR Code"
                          className="w-32 h-32"
                        />
                      </div>
                    )}
                    
                    <p className="text-sm text-gray-600 mt-2">
                      {qrCodeUrl ? "Scan to save contact" : "Click to generate QR code"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
