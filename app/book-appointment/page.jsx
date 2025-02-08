'use client';

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

// Import the Navigation and Footer components
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&auto=format&fit=crop",
    about: "Specialized in Family Medicine with over 15 years of experience",
    qualifications: "MBBS, MD (Family Medicine)",
    medicalAid: ["Discovery Health", "Bonitas", "Momentum"],
    pricing: "R850 per consultation"
  },
  {
    id: 2,
    name: "Dr. James Thompson",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop",
    about: "Pediatric specialist focused on child development and care",
    qualifications: "MBBS, DCH, MD (Pediatrics)",
    medicalAid: ["Discovery Health", "Medihelp", "Fedhealth"],
    pricing: "R950 per consultation"
  }
];

const questions = [
  "Have you visited this doctor before?",
  "Are you currently taking any medication?",
  "Do you have any allergies?"
];

export default function BookAppointment() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [date, setDate] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Include the Navigation component */}
      <Navigation />

      <h1 className="text-3xl font-bold mb-8 text-center">Book an Appointment</h1>

      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <Label htmlFor="doctor">Select a Doctor</Label>
          <Select onValueChange={(value) => setSelectedDoctor(doctors.find((d) => d.id === parseInt(value)))}>
            <SelectTrigger>
              <SelectValue placeholder="Choose your doctor" />
            </SelectTrigger>
            <SelectContent>
              {doctors.map((doctor) => (
                <SelectItem key={doctor.id} value={doctor.id.toString()}>
                  {doctor.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedDoctor && (
          <Card>
            <CardHeader>
              <CardTitle>Doctor Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={selectedDoctor.image} alt={selectedDoctor.name} />
                  <AvatarFallback>
                    {selectedDoctor.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{selectedDoctor.name}</h3>
                  <p className="text-muted-foreground">{selectedDoctor.about}</p>
                  <p className="font-medium">Qualifications: {selectedDoctor.qualifications}</p>
                  <div>
                    <p className="font-medium">Accepted Medical Aid:</p>
                    <ul className="list-disc list-inside text-sm">
                      {selectedDoctor.medicalAid.map((aid) => (
                        <li key={aid}>{aid}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="font-medium text-primary">{selectedDoctor.pricing}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="Enter your first name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Enter your last name" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Cellphone Number</Label>
          <Input id="phone" placeholder="Enter your cellphone number" type="tel" />
        </div>

        <div className="space-y-2">
          <Label>Appointment Date & Time</Label>
          <div className="flex flex-col sm:flex-row gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("justify-start text-left font-normal w-full sm:w-[240px]", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 8 }, (_, i) => i + 9).map((hour) => (
                  <SelectItem key={hour} value={`${hour}:00`}>
                    {`${hour}:00`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Medical Questionnaire</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions.map((question, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`question-${index}`} />
                <Label htmlFor={`question-${index}`}>{question}</Label>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" checked={termsAccepted} onCheckedChange={(checked) => setTermsAccepted(checked === true)} />
          <Label htmlFor="terms" className="text-sm">
            I agree to the terms and conditions and consent to the processing of my personal information
          </Label>
        </div>

        <Button className="w-full" disabled={!termsAccepted}>
          Book Appointment
        </Button>
      </div>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}
