import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./components/Card";
import User from "./components/User";
const App = () => {
  const jobs = [
    {
      id: 1,
      brandLogo:
        "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg",
      companyName: "Google",
      postedAgo: "5 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      post: "Senior Frontend Engineer",
      pay: 120,
      location: "Bangalore, India",
    },
    {
      id: 2,
      brandLogo:
        "https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg",
      companyName: "Amazon",
      postedAgo: "1 week ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      post: "UI/UX Designer",
      pay: 60,
      location: "Mumbai, India",
    },
    {
      id: 3,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
      companyName: "Meta",
      postedAgo: "3 days ago",
      tag1: "Remote",
      tag2: "Senior Level",
      post: "React Developer",
      pay: 110,
      location: "Remote",
    },
    {
      id: 4,
      brandLogo:
        "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      postedAgo: "2 weeks ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      post: "iOS Engineer",
      pay: 105,
      location: "Hyderabad, India",
    },
    {
      id: 5,
      brandLogo:
        "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
      companyName: "Netflix",
      postedAgo: "4 days ago",
      tag1: "Contract",
      tag2: "Senior Level",
      post: "Product Designer",
      pay: 130,
      location: "Los Gatos, USA",
    },
    {
      id: 6,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorZ3N7ebM-UJ7ZrVpl4YoZH6p9BweEVfLzQ&s",
      companyName: "Microsoft",
      postedAgo: "6 days ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      post: "Backend Engineer",
      pay: 95,
      location: "Noida, India",
    },
    {
      id: 7,
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/020/336/735/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
      companyName: "Tesla",
      postedAgo: "1 day ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      post: "Software Engineer",
      pay: 115,
      location: "Austin, USA",
    },
    {
      id: 8,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JPvedCBmNG39bU4Zvq1PJTRRl6Nc8OOimA&s",
      companyName: "Uber",
      postedAgo: "3 weeks ago",
      tag1: "Part Time",
      tag2: "Junior Level",
      post: "Frontend Developer",
      pay: 55,
      location: "Pune, India",
    },
    {
      id: 9,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IjQGSTn0U1569fI_rH-x5k_Ze10A7eVgOw&s",
      companyName: "Airbnb",
      postedAgo: "2 days ago",
      tag1: "Remote",
      tag2: "Mid Level",
      post: "Product Engineer",
      pay: 100,
      location: "Remote",
    },
    {
      id: 10,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png",
      companyName: "LinkedIn",
      postedAgo: "1 week ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      post: "Platform Engineer",
      pay: 125,
      location: "Bangalore, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              brandLogo={elem.brandLogo}
              postedAgo={elem.postedAgo}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
