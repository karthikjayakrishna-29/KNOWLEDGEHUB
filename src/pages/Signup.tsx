import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    collegeName: "",
    year: "",
    department: "",
    password: "",
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    if (!formData.fullName || !formData.email || !formData.password) {
      toast.error("Please fill in all required fields!");
      return;
    }

    if (!formData.collegeName || !formData.year || !formData.department) {
      toast.error("Please complete your profile information!");
      return;
    }

    // Store user data
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userData", JSON.stringify(formData));

    toast.success("Account created successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2557] via-[#1a3a6b] to-[#0f2557] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gray-100 p-3 rounded-2xl mb-4">
            <span className="text-4xl">📚</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">KnowledgeHub</h1>
          <p className="text-gray-600 text-sm mt-1">
            Join the learning community
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-900"
            >
              Full Name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="h-12 bg-gray-100 border-0 text-gray-900 placeholder:text-gray-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-900"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@college.edu"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="h-12 bg-gray-100 border-0 text-gray-900 placeholder:text-gray-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="collegeName"
              className="text-sm font-medium text-gray-900"
            >
              College Name
            </Label>
            <Input
              id="collegeName"
              type="text"
              placeholder="Enter your college name"
              value={formData.collegeName}
              onChange={(e) =>
                setFormData({ ...formData, collegeName: e.target.value })
              }
              className="h-12 bg-gray-100 border-0 text-gray-900 placeholder:text-gray-500"
              autoComplete="organization"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-900">Year</Label>
              <Select
                value={formData.year}
                onValueChange={(value) =>
                  setFormData({ ...formData, year: value })
                }
                required
              >
                <SelectTrigger className="h-12 bg-gray-100 border-0 text-gray-900">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1st Year</SelectItem>
                  <SelectItem value="2">2nd Year</SelectItem>
                  <SelectItem value="3">3rd Year</SelectItem>
                  <SelectItem value="4">4th Year</SelectItem>
                  <SelectItem value="5">5th Year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-900">
                Department
              </Label>
              <Select
                value={formData.department}
                onValueChange={(value) =>
                  setFormData({ ...formData, department: value })
                }
                required
              >
                <SelectTrigger className="h-12 bg-gray-100 border-0 text-gray-900">
                  <SelectValue placeholder="Select dept" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {/* B.E. / B.Tech - Computer Science & IT */}
                  <SelectGroup>
                    <SelectLabel>Computer Science & IT</SelectLabel>
                    <SelectItem value="cse">
                      B.E./B.Tech - Computer Science and Engineering
                    </SelectItem>
                    <SelectItem value="it">
                      B.E./B.Tech - Information Technology
                    </SelectItem>
                    <SelectItem value="cse-aiml">
                      B.Tech - CSE (AI & ML)
                    </SelectItem>
                    <SelectItem value="cse-ds">
                      B.Tech - CSE (Data Science)
                    </SelectItem>
                    <SelectItem value="ai-ml">
                      B.Tech - AI and Machine Learning
                    </SelectItem>
                    <SelectItem value="ai-ds">
                      B.Tech - AI and Data Science
                    </SelectItem>
                    <SelectItem value="cse-iot">B.Tech - CSE (IoT)</SelectItem>
                    <SelectItem value="cse-cyber">
                      B.Tech - CSE (Cyber Security)
                    </SelectItem>
                    <SelectItem value="cse-blockchain">
                      B.Tech - CSE (Blockchain)
                    </SelectItem>
                  </SelectGroup>

                  {/* B.E. / B.Tech - Electronics & Communication */}
                  <SelectGroup>
                    <SelectLabel>Electronics & Communication</SelectLabel>
                    <SelectItem value="ece">
                      B.E./B.Tech - Electronics and Communication
                    </SelectItem>
                    <SelectItem value="etc">
                      B.E./B.Tech - Electronics and Telecommunication
                    </SelectItem>
                    <SelectItem value="ece-vlsi">
                      B.Tech - ECE (VLSI Design)
                    </SelectItem>
                    <SelectItem value="eie">
                      B.E./B.Tech - Electronics and Instrumentation
                    </SelectItem>
                    <SelectItem value="ice">
                      B.E./B.Tech - Instrumentation and Control
                    </SelectItem>
                    <SelectItem value="bme">
                      B.E./B.Tech - Biomedical Engineering
                    </SelectItem>
                    <SelectItem value="avionics">B.Tech - Avionics</SelectItem>
                  </SelectGroup>

                  {/* B.E. / B.Tech - Electrical */}
                  <SelectGroup>
                    <SelectLabel>Electrical Engineering</SelectLabel>
                    <SelectItem value="eee">
                      B.E./B.Tech - Electrical and Electronics
                    </SelectItem>
                    <SelectItem value="ee">
                      B.E./B.Tech - Electrical Engineering
                    </SelectItem>
                    <SelectItem value="eee-power">
                      B.Tech - EEE (Power Systems)
                    </SelectItem>
                    <SelectItem value="eee-renewable">
                      B.Tech - EE (Renewable Energy)
                    </SelectItem>
                  </SelectGroup>

                  {/* B.E. / B.Tech - Mechanical */}
                  <SelectGroup>
                    <SelectLabel>Mechanical Engineering</SelectLabel>
                    <SelectItem value="mech">
                      B.E./B.Tech - Mechanical Engineering
                    </SelectItem>
                    <SelectItem value="auto">
                      B.E./B.Tech - Automobile Engineering
                    </SelectItem>
                    <SelectItem value="aero">
                      B.E./B.Tech - Aeronautical Engineering
                    </SelectItem>
                    <SelectItem value="aerospace">
                      B.E./B.Tech - Aerospace Engineering
                    </SelectItem>
                    <SelectItem value="prod">
                      B.E./B.Tech - Production Engineering
                    </SelectItem>
                    <SelectItem value="industrial">
                      B.E./B.Tech - Industrial Engineering
                    </SelectItem>
                    <SelectItem value="mfg">
                      B.E./B.Tech - Manufacturing Engineering
                    </SelectItem>
                    <SelectItem value="mechatronics">
                      B.E./B.Tech - Mechatronics
                    </SelectItem>
                    <SelectItem value="robotics">
                      B.Tech - Robotics and Automation
                    </SelectItem>
                  </SelectGroup>

                  {/* B.E. / B.Tech - Civil */}
                  <SelectGroup>
                    <SelectLabel>Civil Engineering</SelectLabel>
                    <SelectItem value="civil">
                      B.E./B.Tech - Civil Engineering
                    </SelectItem>
                    <SelectItem value="civil-struct">
                      B.Tech - Civil (Structural)
                    </SelectItem>
                    <SelectItem value="civil-transport">
                      B.Tech - Civil (Transportation)
                    </SelectItem>
                    <SelectItem value="env">
                      B.E./B.Tech - Environmental Engineering
                    </SelectItem>
                  </SelectGroup>

                  {/* B.E. / B.Tech - Chemical & Related */}
                  <SelectGroup>
                    <SelectLabel>Chemical & Process</SelectLabel>
                    <SelectItem value="chem">
                      B.E./B.Tech - Chemical Engineering
                    </SelectItem>
                    <SelectItem value="petro">
                      B.E./B.Tech - Petroleum Engineering
                    </SelectItem>
                    <SelectItem value="polymer">
                      B.E./B.Tech - Polymer Engineering
                    </SelectItem>
                    <SelectItem value="food-tech">
                      B.Tech - Food Technology
                    </SelectItem>
                  </SelectGroup>

                  {/* B.E. / B.Tech - Biotechnology */}
                  <SelectGroup>
                    <SelectLabel>Biotechnology</SelectLabel>
                    <SelectItem value="biotech">
                      B.E./B.Tech - Biotechnology
                    </SelectItem>
                    <SelectItem value="bio-eng">
                      B.E./B.Tech - Bio Engineering
                    </SelectItem>
                    <SelectItem value="bio-chem">
                      B.Tech - Biochemical Engineering
                    </SelectItem>
                    <SelectItem value="genetic">
                      B.Tech - Genetic Engineering
                    </SelectItem>
                  </SelectGroup>

                  {/* B.E. / B.Tech - Other Engineering */}
                  <SelectGroup>
                    <SelectLabel>Other Engineering</SelectLabel>
                    <SelectItem value="mining">
                      B.E./B.Tech - Mining Engineering
                    </SelectItem>
                    <SelectItem value="marine">
                      B.E./B.Tech - Marine Engineering
                    </SelectItem>
                    <SelectItem value="naval">
                      B.E./B.Tech - Naval Architecture
                    </SelectItem>
                    <SelectItem value="textile">
                      B.E./B.Tech - Textile Engineering
                    </SelectItem>
                    <SelectItem value="metallurgy">
                      B.E./B.Tech - Metallurgical Engineering
                    </SelectItem>
                    <SelectItem value="agri">
                      B.E./B.Tech - Agricultural Engineering
                    </SelectItem>
                  </SelectGroup>

                  {/* B.Sc. - Science */}
                  <SelectGroup>
                    <SelectLabel>B.Sc. - Science</SelectLabel>
                    <SelectItem value="bsc-cs">
                      B.Sc. - Computer Science
                    </SelectItem>
                    <SelectItem value="bsc-it">
                      B.Sc. - Information Technology
                    </SelectItem>
                    <SelectItem value="bsc-physics">B.Sc. - Physics</SelectItem>
                    <SelectItem value="bsc-chemistry">
                      B.Sc. - Chemistry
                    </SelectItem>
                    <SelectItem value="bsc-maths">
                      B.Sc. - Mathematics
                    </SelectItem>
                    <SelectItem value="bsc-biology">B.Sc. - Biology</SelectItem>
                    <SelectItem value="bsc-biotech">
                      B.Sc. - Biotechnology
                    </SelectItem>
                  </SelectGroup>

                  {/* Architecture */}
                  <SelectGroup>
                    <SelectLabel>Architecture & Planning</SelectLabel>
                    <SelectItem value="barch">B.Arch - Architecture</SelectItem>
                    <SelectItem value="bplan">B.Plan - Planning</SelectItem>
                  </SelectGroup>

                  {/* Management */}
                  <SelectGroup>
                    <SelectLabel>Management</SelectLabel>
                    <SelectItem value="bba">
                      BBA - Business Administration
                    </SelectItem>
                    <SelectItem value="mba">
                      MBA - Business Administration
                    </SelectItem>
                  </SelectGroup>

                  {/* Commerce */}
                  <SelectGroup>
                    <SelectLabel>Commerce</SelectLabel>
                    <SelectItem value="bcom">B.Com - Commerce</SelectItem>
                    <SelectItem value="mcom">M.Com - Commerce</SelectItem>
                    <SelectItem value="ca">
                      CA - Chartered Accountancy
                    </SelectItem>
                  </SelectGroup>

                  {/* Arts */}
                  <SelectGroup>
                    <SelectLabel>Arts & Humanities</SelectLabel>
                    <SelectItem value="ba">BA - Arts</SelectItem>
                    <SelectItem value="ba-english">BA - English</SelectItem>
                    <SelectItem value="ba-history">BA - History</SelectItem>
                    <SelectItem value="ba-psychology">
                      BA - Psychology
                    </SelectItem>
                  </SelectGroup>

                  {/* Pharmacy */}
                  <SelectGroup>
                    <SelectLabel>Pharmacy</SelectLabel>
                    <SelectItem value="bpharma">B.Pharm - Pharmacy</SelectItem>
                    <SelectItem value="d-pharma">D.Pharm - Pharmacy</SelectItem>
                    <SelectItem value="mpharma">M.Pharm - Pharmacy</SelectItem>
                  </SelectGroup>

                  {/* Medical */}
                  <SelectGroup>
                    <SelectLabel>Medical</SelectLabel>
                    <SelectItem value="mbbs">MBBS</SelectItem>
                    <SelectItem value="bds">BDS - Dental Surgery</SelectItem>
                    <SelectItem value="nursing">B.Sc. Nursing</SelectItem>
                  </SelectGroup>

                  {/* Law */}
                  <SelectGroup>
                    <SelectLabel>Law</SelectLabel>
                    <SelectItem value="llb">LLB - Laws</SelectItem>
                    <SelectItem value="ba-llb">BA LLB (Hons.)</SelectItem>
                    <SelectItem value="bba-llb">BBA LLB (Hons.)</SelectItem>
                  </SelectGroup>

                  {/* Design */}
                  <SelectGroup>
                    <SelectLabel>Design & Arts</SelectLabel>
                    <SelectItem value="bdes">B.Des - Design</SelectItem>
                    <SelectItem value="fashion">
                      B.Des - Fashion Design
                    </SelectItem>
                    <SelectItem value="fine-arts">BFA - Fine Arts</SelectItem>
                  </SelectGroup>

                  {/* Media */}
                  <SelectGroup>
                    <SelectLabel>Media & Communication</SelectLabel>
                    <SelectItem value="bjmc">BJMC - Journalism</SelectItem>
                    <SelectItem value="bmm">BMM - Mass Media</SelectItem>
                  </SelectGroup>

                  {/* Computer Applications */}
                  <SelectGroup>
                    <SelectLabel>Computer Applications</SelectLabel>
                    <SelectItem value="bca">
                      BCA - Computer Applications
                    </SelectItem>
                    <SelectItem value="mca">
                      MCA - Computer Applications
                    </SelectItem>
                  </SelectGroup>

                  {/* Others */}
                  <SelectGroup>
                    <SelectLabel>Other Courses</SelectLabel>
                    <SelectItem value="bed">B.Ed - Education</SelectItem>
                    <SelectItem value="hotel">Hotel Management</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-900"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="h-12 bg-gray-100 border-0 text-gray-900 placeholder:text-gray-500"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-[#0f2557] hover:bg-[#0a1a3d] text-white rounded-xl font-medium"
          >
            Sign Up
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#0f2557] hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
