"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit2, X } from "lucide-react";
// Import the Navigation and Footer components
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const appointments = {
  upcoming: [
    { id: "AP001", date: "2024-04-10", time: "09:00", name: "John Doe", number: "+27123456789", doctor: "Dr. Sarah Wilson", status: "Confirmed" },
    { id: "AP002", date: "2024-04-12", time: "14:30", name: "Jane Smith", number: "+27987654321", doctor: "Dr. James Thompson", status: "Pending" },
  ],
  previous: [
    { id: "AP003", date: "2024-03-15", time: "11:00", name: "John Doe", number: "+27123456789", doctor: "Dr. Sarah Wilson", status: "Completed" },
  ],
  cancelled: [
    { id: "AP004", date: "2024-03-20", time: "10:00", name: "Jane Smith", number: "+27987654321", doctor: "Dr. James Thompson", status: "Cancelled" },
  ],
};

export default function ManageAppointment() {
  const [isVerified, setIsVerified] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleVerifyOTP = () => {
    if (otp.every(digit => digit !== "")) {
      setIsVerified(true);
    }
  };

  const handleSendOTP = () => {
    if (phoneNumber) {
      setShowOtp(true);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      if (value !== "" && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  if (!isVerified) {
    return (
      <div>
        <Navigation />
        <div className="container mx-auto py-8 px-4">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Verify Your Phone Number</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex gap-2">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+27 phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <Button 
                    onClick={handleSendOTP}
                    disabled={!phoneNumber || phoneNumber.length < 10}
                  >
                    Send OTP
                  </Button>
                </div>
              </div>
              
              {showOtp && (
                <div className="space-y-2">
                  <Label>Enter OTP</Label>
                  <div className="flex gap-2 justify-between">
                    {otp.map((digit, index) => (
                      <Input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-12 text-center text-lg"
                      />
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-4" 
                    onClick={handleVerifyOTP}
                    disabled={!otp.every(digit => digit !== "")}
                  >
                    Verify
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Manage Appointments</h1>
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="previous">Previous</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          {Object.keys(appointments).map((key) => (
            <TabsContent key={key} value={key}>
              <Card>
                <CardHeader>
                  <CardTitle>{key.charAt(0).toUpperCase() + key.slice(1)} Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Number</TableHead>
                        <TableHead>Doctor</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {appointments[key].map((appointment) => (
                        <TableRow key={appointment.id}>
                          <TableCell>{appointment.id}</TableCell>
                          <TableCell>{appointment.date}</TableCell>
                          <TableCell>{appointment.time}</TableCell>
                          <TableCell>{appointment.name}</TableCell>
                          <TableCell>{appointment.number}</TableCell>
                          <TableCell>{appointment.doctor}</TableCell>
                          <TableCell>{appointment.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
