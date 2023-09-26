
# Onine Music School - MERN stack

The harmony heights is an online music School that runs on summertime. Has a vast variety of lessons and experienced teachers.
This is a single-page-application project made from the technologies that falls under the MERN stack, with Firebase and JWT authentication.
Stripe is used as the payment method.


## Features

- Beatiful UI/UX
- RBAC (Role-Based Access Control)
- Firebase technology 
- JWT Authentication and Authorization 
- Single-Page-Application (SPA)
- Payment Method Using Stripe


## Tech Stack

**Client:** React, TailwindCSS, DaisyUI, React-router, Firebase, React-spring etc.  

**Server:** Node, Express, Stripe

**DataBase:** Mongodb


## Run Locally

1. Clone the project

```bash
  git clone https://github.com/Samiislam851/Harmony-heights-FE.git
```

2. Go to the project directory


3. Install dependencies

```bash
  npm install
```

4. Start the server

```bash
  npm run dev
```

## Role Based Access Controls

#### Admin Features : 
- Admins can Approve classes that are requested from the Instructors.

- Can update the role of a student or teacher 

#### Instructor Role Features : 
- Instructors can add classes which will later be displayed in the dashboard of admin until he/she approves it.

- Instructors can set the maximum number of students that can enroll.



#### Student Role Features : 
- Students can enroll as many classes as they want to. 

- They will be redirected to the payment method while enrolling.

- Any user including Admin, Instructors, Students can see the How many students have enrolled and how many seats are left.
## Screenshots
### Homepage UI Screenshots:
![Homepage](https://i.ibb.co/PhnTgf6/homepage1.png)

![Homepage](https://i.ibb.co/jgcssFY/Classes-List.png)


![Homepage](https://i.ibb.co/KDrkcjm/Instructors.png)


![Homepage](https://i.ibb.co/RgPtWGS/featured-Blogs.png)


![Homepage](https://i.ibb.co/Sc1LQh7/make-an-art-component.png)

![Homepage](https://i.ibb.co/g4ZrkVs/Feedback.png)
#### A single Blog:
![Homepage](https://i.ibb.co/3Wm02N7/single-Blog.png)

### Student Role Dashboard:
A student can select and enroll in a class through payment

![student](https://i.ibb.co/y4SNqTS/Student-Dashboard-1.png)

![student](https://i.ibb.co/Ptwjn3W/Student-Dashboard-2.png)

After Clicking in pay now student will be redirected to payment method 

![student](https://i.ibb.co/7Xgygbb/Payment-1.png)

![student](https://i.ibb.co/TPtChDk/Payment-3.png)

after enrolement student can see the class in the enrolled List

![student](https://i.ibb.co/9r2wjtq/Student-Dashboard-3.png)

### Admin Dashboard 

![Admin](https://i.ibb.co/Czqhy2c/Admin-Dashboard-1.png)

![Admin](https://i.ibb.co/jz8GPgR/Admin-Dashboard-2.png)

![Admin](https://i.ibb.co/HTDXVFR/Admin-Dashboard-3.png)

### Instructor Dashboard 

![Instructor](https://i.ibb.co/k81qFrs/Instructor-Dashboard-1.png)

![Instructor](https://i.ibb.co/wJMPddf/Instructor-Dashboard-2.png)

![Instructor](https://i.ibb.co/cbx2R56/Instructor-Dashboard-3.png)



## LiveSite

https://harmonyheights.netlify.app/


## Documentation

[Documentation](https://linktodocumentation)

