import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";


import "./BookingPage.css";

const BookingPage = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState({
    male: 0,
    female: 0,
    child: 0,
    rooms: 1,
  });
  const [roomSelected, setRoomSelected] = useState(null);

  const roomOptions = [
    {
      id: 1,
      name: "Sagar Darshan Guest House",
      price: 6000,
      images: ["../img/room-img/sagar-darshan/IMG_6891.JPG"],
      facilities: ["Auditorium", "Premier Hall", "Restaurant"],
      roomTypes: [
        {
          type: "4 Bed Suite Room",
          price: 6000,
          available: 0,
          image: "../img/room-img/sagar-darshan/IMG_6894.JPG",
        },
        {
          type: "Suite",
          price: 5500,
          available: 2,
          image: "../img/room-img/sagar-darshan/IMG_6899.JPG",
        },
        {
          type: "Super Deluxe",
          price: 4500,
          available: 5,
          image: "../img/room-img/sagar-darshan/IMG_7133.JPG",
        },
      ],
    },
    {
      id: 2,
      name: "Leelavati Guest House",
      price: 5500,
      available: false,
      images: ["../img/room-img/Leelavati Guest House/IMG_7097.JPG"],
      facilities: ["Reception Hall", "Free WiFi", "Banquet Hall"],
      roomTypes: [
        {
          type: "4 Bed Suite Room",
          price: 6000,
          available: 0,
          image: "../img/room-img/Leelavati Guest House/IMG_7006.JPG",
        },
        {
          type: "Suite",
          price: 5500,
          available: 2,
          image: "../img/room-img/Leelavati Guest House/IMG_7006.JPG",
        },
        {
          type: "Super Deluxe",
          price: 4500,
          available: 5,
          image: "../img/room-img/Leelavati Guest House/IMG_7006.JPG",
        },
      ],
    },
    {
      id: 3,
      name: "Maheshwari Guest House",
      price: 4500,
      available: false,
      images: ["../img/room-img/Maheshwari Guest House/IMG_7033.JPG"],
      facilities: ["Temple View", "Attached Bathroom", "Breakfast"],
      roomTypes: [
        {
          type: "4 Bed Suite Room",
          price: 6000,
          available: 0,
          image: "../img/room-img/Maheshwari Guest House/IMG_7037.JPG",
        },
        {
          type: "Suite",
          price: 5500,
          available: 2,
          image: "../img/room-img/Maheshwari Guest House/IMG_7039.JPG",
        },
        {
          type: "Super Deluxe",
          price: 4500,
          available: 5,
          image: "../img/room-img/Maheshwari Guest House/IMG_7151.JPG",
        },
      ],
    },
    // {
    //   id: 4,
    //   name: "Deluxe Room",
    //   price: 4500,
    //   images: ["../img/shop/hrm1.jpg"],
    //   facilities: ["Temple View", "Attached Bathroom", "Breakfast"],
    // },
    // {
    //   id: 5,
    //   name: "Sea Facing Room",
    //   price: 4500,
    //   images: ["../img/shop/hrm2.jpg"],
    //   facilities: ["Temple View", "Attached Bathroom", "Breakfast"],
    // },
    // {
    //   id: 6,
    //   name: "Regular Room",
    //   price: 4500,
    //   images: ["../img/shop/hrm2.jpg"],
    //   facilities: ["Temple View", "Attached Bathroom", "Breakfast"],
    // },
  ];

  // Validation Schema using Yup
  const bookingValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone is required"),
    notes: Yup.string(),
  });

  return (
    <div className="booking-page">
      <div className="container mt-4 booking-wrapper">
        {/* Top Search Toolbar */}
        <div className="search-toolbar shadow-sm p-3 mb-4 rounded d-flex gap-2 flex-wrap">
          <input
            type="date"
            className="form-control"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
          <input
            type="date"
            className="form-control"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Male"
            min="0"
            onChange={(e) =>
              setGuests({ ...guests, male: Number(e.target.value) })
            }
          />
          <input
            type="number"
            className="form-control"
            placeholder="Female"
            min="0"
            onChange={(e) =>
              setGuests({ ...guests, female: Number(e.target.value) })
            }
          />
          <input
            type="number"
            className="form-control"
            placeholder="Child"
            min="0"
            onChange={(e) =>
              setGuests({ ...guests, child: Number(e.target.value) })
            }
          />
          <input
            type="number"
            className="form-control"
            placeholder="Rooms"
            min="1"
            onChange={(e) =>
              setGuests({ ...guests, rooms: Number(e.target.value) })
            }
          />
          <button className="btn btn-danger">Search</button>
        </div>

        {/* Room Cards */}
        <div className="row">
          {roomOptions.map((room) => {
            const hasSubRooms = room.roomTypes && room.roomTypes.length > 0;

            return (
              <div key={room.id} className="col-md-4 mb-4 room-card-col">
                <div className="card room-card shadow">
                  <img
                    src={room.images[0]}
                    className="card-img-top"
                    alt={room.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{room.name}</h5>

                    {hasSubRooms ? (
                      <div>
                        {room.roomTypes.map((subRoom, idx) => {
                          const isAvailable = subRoom.available > 0;
                          return (
                            <label
                              key={idx}
                              className="subroom-label hover-container"
                              style={{
                                cursor: isAvailable ? "pointer" : "not-allowed",
                              }}
                            >
                              <input
                                type="radio"
                                name={`selectedRoom-${room.id}`}
                                disabled={!isAvailable}
                                onChange={() =>
                                  setRoomSelected({
                                    ...room,
                                    selectedSubRoom: subRoom,
                                    price: subRoom.price,
                                    name: `${room.name} - ${subRoom.type}`,
                                  })
                                }
                                checked={
                                  roomSelected &&
                                  roomSelected.id === room.id &&
                                  roomSelected.selectedSubRoom?.type ===
                                    subRoom.type
                                }
                              />



<div style={{ marginLeft: "10px", lineHeight: "1.6", width: "100%" }}>
  {/* Room Type */}
  <div style={{ marginBottom: "4px" }}>{subRoom.type}</div>

  {/* Price and Availability */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}
  >
    <div>₹{subRoom.price.toLocaleString()}</div>
    <div style={{ color: isAvailable ? "green" : "red", fontWeight: "600" }}>
      {isAvailable ? `${subRoom.available} Rooms` : "No Rooms"}
    </div>
  </div>
</div>





                              {/* Hover image */}
                              <img
                                src={subRoom.image}
                                alt={subRoom.type}
                                className="hover-image"
                              />
                            </label>
                          );
                        })}
                      </div>
                    ) : (
                      <>
                        <p className="card-text">
                          ₹{room.price.toLocaleString()}
                        </p>
                        {!room.available && (
                          <p style={{ color: "red", fontWeight: "bold" }}>
                            No Rooms
                          </p>
                        )}
                        <div className="d-flex justify-content-between align-items-center gap-2">
                          <input
                            type="radio"
                            name="selectedRoom"
                            onChange={() => setRoomSelected(room)}
                            checked={
                              roomSelected && roomSelected.id === room.id
                            }
                          />
                          <button
                            className="book-now-btn btn btn-sm btn-primary"
                            onClick={() => setRoomSelected(room)}
                          >
                            Book Now
                          </button>
                          <Link
                            to={`/room/${room.id}`}
                            className="btn btn-sm btn-outline-secondary"
                          >
                            View Details
                          </Link>
                        </div>
                      </>
                    )}

                    {/* Facilities */}
                    <p>
                      <strong>Facilities:</strong>
                    </p>
                    <ul>
                      {room.facilities.map((fac, idx) => (
                        <li key={idx}>{fac}</li>
                      ))}
                    </ul>

                    {/* Show Book Now and View Details buttons only if subRooms exist */}
                    {hasSubRooms && (
                      <div className="d-flex justify-content-between align-items-center gap-2 mt-3">
                        <button
                          disabled={
                            !roomSelected ||
                            roomSelected.id !== room.id ||
                            !roomSelected.selectedSubRoom
                          }
                          className="book-now-btn btn btn-sm btn-primary"
                          onClick={() => {
                            // Optionally scroll to booking form or any other action
                            if (!roomSelected) return;
                          }}
                        >
                          Book Now
                        </button>
                        <Link
                          to={`/room/${room.id}`}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View Details
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Booking Form with Formik */}
        {roomSelected && (
          <div className="card shadow-sm p-4 mt-5 booking-form">
            <h4 className="mb-3">Complete Your Booking</h4>
            <p>
              <strong>Room:</strong>{" "}
              {roomSelected.selectedSubRoom
                ? roomSelected.name
                : roomSelected.name}
            </p>
            <p>
              <strong>Price:</strong> ₹
              {roomSelected.selectedSubRoom
                ? roomSelected.selectedSubRoom.price.toLocaleString()
                : roomSelected.price.toLocaleString()}
            </p>
            <p>
              <strong>Dates:</strong> {checkIn} to {checkOut}
            </p>

            <Formik
              initialValues={{ name: "", email: "", phone: "", notes: "" }}
              validationSchema={bookingValidationSchema}
              onSubmit={(values) => {
                console.log("Form submitted with:", values);
                alert("Booking Confirmed!");
              }}
            >
              <Form className="row g-3">
                <div className="col-md-4">
                  <Field
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger small mt-1"
                  />
                </div>

                <div className="col-md-4">
                  <Field
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger small mt-1"
                  />
                </div>

                <div className="col-md-4">
                  <Field
                    name="phone"
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-danger small mt-1"
                  />
                </div>

                <div className="col-12">
                  <Field
                    name="notes"
                    as="textarea"
                    className="form-control"
                    placeholder="Additional Notes (optional)"
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-success mt-3">
                    Confirm Booking
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
