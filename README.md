
1.0	Introduction
1.1	Purpose of this document
Route Master enhances public transit by providing instant updates, reducing overcrowding, and improving information accessibility. It ensures a safe, reliable journey and is user-friendly and secure. It signifies a step towards efficient and convenient public transportation.
1.2	Project overview
Route Master is an all-encompassing bus management system that aims to transform the public transportation sector. Its main objective is to tackle prevalent problems such as inconsistency, overcrowding, and lack of information that often affect public transit systems.
Key Features:
Improved Accessibility: The Route Master feature provides users with easy access to a variety of services.
Increased Safety: The system provides security details, thereby enhancing the safety and dependability of bus travel.
User-centric Design: Route Master is designed with the user in mind. It’s easy-to-navigate interface makes it accessible to a broad spectrum of passengers.
Flexible: The system can adapt to the needs of passengers, ensuring a more personalized and comfortable travel experience.
By incorporating these features, Route Master strives to offer a more efficient, reliable, and user-friendly public transportation experience. This project marks a significant stride towards enhancing public transit and making it a more feasible choice for commuters.

2.0	Solution Summary
2.1	Scope
The scope of the Route Master project can be outlined as follows:
1.	Construct a comprehensive bus management system that can tackle prevalent issues in public transportation such as inconsistency, overcrowding, and lack of information.

2.	Create a feature that equips passengers with essential information like estimated arrival times and security details.

3.	Design an intuitive interface that is easy to navigate and accessible to a diverse group of passengers.

4.	Ensure that the system can adapt to the needs of passengers, offering a more personalized and comfortable travel experience.

5.	Incorporate the system with existing public transit infrastructure to guarantee smooth operation.
This project scope is aimed at transforming public transportation by making it more efficient, reliable, and user-friendly. It signifies a considerable advancement towards enhancing public transit and making it a more practical choice for commuters.

2.2	Assumptions
Assumptions made for this project include: 
•	Users have basic understanding of online booking processes. 
•	Users have access to online payment options. 
•	Users browsers support HTTP protocol. 

2.3	Dependencies
System Dependencies
1.	Software Dependencies
The system requires the integration of specific software components. These include, but are not limited to:
o	A Database Management System (DBMS) for the purpose of data storage and retrieval.
o	A web server for hosting the application.

2.	External System Dependencies
The system is designed to interact with external systems. An example of this is:
o	The system interfaces with payment gateways to facilitate transaction processing.
3.	Operational Dependencies
The operation of the system is dependent on several factors. These include:
o	The availability of personnel who are trained in system management and maintenance.
o	The acceptance and adoption of the system by its intended users.

2.4	Risks
Technical Risks: These encompass risks associated with the technology stack utilized, such as compatibility issues within the system, software anomalies, and hardware malfunctions.
Operational Risks: These involve risks related to the operation of the system, such as system downtime, subpar system performance, and breaches of data.
Organizational Risks: These are risks associated with the organization, such as a lack of personnel with the necessary skills, inadequate resources, and poor communication among team members.
Project Management Risks: These include risks related to project management, such as scope creep, project overruns, and failure to meet project milestones.
Security Risks: These involve risks related to system security, such as unauthorized access, data theft, and cyber-attacks.



3.0	Schematic Diagram
A schematic, or schematic diagram, is a representation of the elements of a system using abstract, graphic symbols rather than realistic pictures. It gives an overview of overall system.
 
 

 

 

 

 
4.0	System Design
4.1	Proposed design
 









4.2	Component inventory	 
1. User Interface (UI): This is the front-end component with which users interact. It encompasses interfaces for passengers to book and track buses, as well as administrative interfaces for the management of bus schedules, routes, and other operational specifics.

2. Database Management System (DBMS): This component is tasked with the storage and management of all data pertinent to bus operations. This includes, but is not limited to, bus schedules, routes, passenger information, and ticket bookings.

3. Ticket Booking System: This component is responsible for the facilitation of bus ticket bookings. It incorporates features such as seat selection, payment processing, and ticket generation.

4. Notification System: This component dispatches notifications to passengers regarding their impending journeys and any alterations in bus schedules. Notifications can be disseminated via email, SMS, or push notifications within the application.

5. Authentication System: This component oversees user accounts and handles user authentication and authorization. It ensures that only authorized users have access to certain features within the system.
5.0	Database Design
5.1	Data Model
 
5.2	Tables Structure
1.	Bus
 Column Name	Data Type	Length	Nulls
bus_id	INT	-	NOT NULL
arrival_time	TIME	-	-
available_seats	INT	-	-
bus_journey_date	DATE	-	-
bus_name	VARCHAR	255	-
bus_type	VARCHAR	255	-
departure_time	TIME	-	-
driver_name	VARCHAR	255	-
fare	INT	-	NOT NULL
route_from	VARCHAR	255	-
route_to	VARCHAR	255	-
total_seats	INT	-	-
route_routeid	INT	-	-

2.	Reservation
 Column Name	Data Type	Length	Nulls
reservationid	INT	-	NOT NULL
booked_seat	INT	-	-
date	DATE	- 	-
destination	VARCHAR	255	-
fare	INT	-	-
journey_date	DATE	-	-
source	VARCHAR	255	-
status	VARCHAR	255	-
time	TIME	-	-
bus_bus_id	INT	-	NOT NULL
user_userid	INT	-	NOT NULL

3. User
 Column Name	Data Type	Length	Nulls
userid	INT	-	NOT NULL
email	VARCHAR	255	-
first_name	VARCHAR	255	-
last_name	VARCHAR	255	-
mobile	VARCHAR	255	-
password	VARCHAR	255	-
total_feed_back	INT	-	-
total_reservation	INT	-	-


4.	Route
 Column Name	Data Type	Length	Nulls
routeid	INT	-	NOT NULL
distance	INT	-	-
route_from	VARCHAR	
	-
route_to	VARCHAR	255	-

5.	current_user_session
Column Name	Data Type	Length	Nulls
userid	INT	-	NOT NULL
time	DATETIME	6	-
uuid	VARCHAR	255	-

6.	current_admin_session 
Column Name	Data Type	Length	Nulls
adminid	INT	-	NOT NULL
aid	VARCHAR	255	-
name	VARCHAR	255	-
time	DATETIME	6	-




7.	Admin
Column Name	Data Type	Length	Nulls
adminid	INT	-	NOT NULL
email	VARCHAR	255	-
name	VARCHAR	255	-
password	VARCHAR	255	-

8.	Feedback
Column Name	Data Type	Length	Nulls
feed_back_id	INT	-	NOT NULL
bus_id	INT	-	-
comments	VARCHAR	255	-
driver_rating	INT	-	-
feedback_date_time	DATETIME	6	-
overall_rating	INT	-	-
service_rating 	INT	-	 -
user_id	INT	-	-
user_userid	INT	-	-






	
9.	Feedback_seq
Column Name	Data Type	Length	Nulls
next_val	BIGINT	-	-

10.	User_seq
Column Name	Data Type	Length	Nulls
next_val	BIGINT	-	-
	
11.	Admin_seq
Column Name	Data Type	Length	Nulls
next_val	BIGINT	-	-

12.	Route_seq
Column Name	Data Type	Length	Nulls
next_val	BIGINT	-	-

13.	Reservation_seq
Column Name	Data Type	Length	Nulls
next_val	BIGINT	-	-
6.0	Appendices
6.1	Glossary
Acronyms	Definitions
API	Application Programming Interface is a set of guidelines that enable different software applications, like Route Master, to interact and exchange information.
REST API	Representational State Transfer Application Programming Interface, or REST API, is a design approach for creating networked applications, usually employing HTTP protocols for interaction.
JPA	Java Persistence API simplifies the process of constructing applications powered by Spring that utilize data access technologies.











6.2	Other
7.0	Terms & Conditions
Disclaimer: Please do not circulate or distribute this document outside of Cognizant Network, We have a Zero Tolerance Policy. Kindly adhere to 100% Compliance at all times.   










8.0	Change Log
Please note that this table needs to be maintained even if a Configuration Management tool is used. 
	Version Number		Changes made
V<n.n>	<If the change details are not explicitly documented in the table below, reference should be provided here>
	Page no	Changed by	Effective date	Changes effected
				
				
				
				

