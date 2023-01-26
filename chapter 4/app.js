import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/* APP LAYOUT 

- HEADER
  - logo
  - navitems ( home, about us, contact, cart, etc)

- BODY 
  - search bar
  - restaurant cards
    - image
    - name
    - cuisines
    - time - SLA string
    - cost for two

  - FOOTER

*/

const Logo = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://i.pinimg.com/564x/a9/00/68/a900685f5b45728744c502c387b297cd.jpg"
      ></img>
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About us </li>
          <li>Contact </li>
          <li>Cart </li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "57722",
      name: "DMB(Doodh Misthan Bhandar)- Bani Park",
      uuid: "8df33e33-2f45-4551-a1e9-ac2e4ce58388",
      city: "12",
      area: "Bani Park",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "mwxhhhmz9gdap5zrcojj",
      cuisines: [
        "Navratri Special",
        "Thalis",
        "Chinese",
        "Continental",
        "Snacks",
        "Punjabi",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "dmb-restaurant-bani-park-sindhi-camp-2",
        city: "jaipur",
      },
      cityState: "12",
      address: "718, First Floor, Meera Marg, Jhotwara Road, Bani Park, Jaipur",
      locality: "Jhotwara Road",
      parentId: 7093,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2000,
        message: "",
        title: "Delivery Charge",
        amount: "2000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5751170~p=1~eid=00000185-e3fb-29ca-0605-9ce8001f0111",
      badges: {
        imageBased: [],
        divBased: [],
        divExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "57722",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "54532",
      name: "Agarwal Caterers - Shastri Nagar",
      uuid: "9f2209a0-fbcd-4e16-9f18-bbe659dbdc6d",
      city: "12",
      area: "Shastri Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "igynbxeggu4dexnrlxxd",
      cuisines: ["Desserts", "Sweets"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 1.7000000476837158,
      slugs: {
        restaurant: "agarwal-caterers-shastri-nagar-sindhi-camp",
        city: "jaipur",
      },
      cityState: "12",
      address: "E53, Near Science Park, Shastri Nagar, Jaipur",
      locality: "Near Science Park",
      parentId: 27555,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2000,
        message: "",
        title: "Delivery Charge",
        amount: "2000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        divBased: [],
        divExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "54532",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 1.7000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "44507",
      name: "Kanha",
      uuid: "67fcfefb-4dfb-4a2d-9d46-106da81367cd",
      city: "12",
      area: "Shastri Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "tfmcl35uvxylistuhypt",
      cuisines: [
        "Sweets",
        "North Indian",
        "South Indian",
        "Desserts",
        "Beverages",
        "Thalis",
        "Rajasthani",
        "Bakery",
        "Pizzas",
        "Chinese",
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 1,
      slugs: {
        restaurant: "kanha-shastri-nagar-sindhi-camp",
        city: "jaipur",
      },
      cityState: "12",
      address:
        "G-9 to G-15, Arya Square, Jhotwara Road, Subash Nagar, Shastri Nagar, Jaipur, Rajasthan 302016",
      locality: "Jhotwara Road",
      parentId: 4650,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT100 off",
        shortDescriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2000,
        message: "",
        title: "Delivery Charge",
        amount: "2000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        divBased: [],
        divExtendedBadges: [],
      },
      lastMileTravelString: "1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "44507",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 1,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "77418",
      name: "Rominus Pizza And Burger",
      uuid: "6c2dd533-edc2-4ba0-809d-6413b77ed91f",
      city: "12",
      area: "Vidhyadhar Nagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "k6kdnm18qg8sl0im3y0c",
      cuisines: [
        "Pizzas",
        "American",
        "Italian-American",
        "Barbecue",
        "Snacks",
        "Grill",
        "Italian",
        "Pastas",
        "Sweets",
        "Desserts",
        "Beverages",
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 46,
      minDeliveryTime: 45,
      maxDeliveryTime: 55,
      slaString: "45-55 MINS",
      lastMileTravel: 4.099999904632568,
      slugs: {
        restaurant: "rominos-pizza-central-spine-vidhyadhar-nagar",
        city: "jaipur",
      },
      cityState: "12",
      address:
        "Shop G1, Galaxy Plaza, Opposite Times Plaza, Near National Handloom, Vidhyadhar Nagar, Jaipur",
      locality: "Vidhyadhar Nagar",
      parentId: 8387,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2800,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2800,
        message: "",
        title: "Delivery Charge",
        amount: "2800",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5657727~p=4~eid=00000185-e3fb-29ca-0605-9ce9001f0450",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "77418",
        deliveryTime: 46,
        minDeliveryTime: 45,
        maxDeliveryTime: 55,
        lastMileTravel: 4.099999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "57532",
      name: "Shree Agarwal Caterers",
      uuid: "f729edff-6577-4aa2-bdd5-90957a5387ee",
      city: "12",
      area: "Vidhyadhar Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "fhfxyzgefeqfujyygxl6",
      cuisines: ["Bakery", "Sweets", "Desserts"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "shree-agarwal-caterers-sector-1-vidhyadhar-nagar",
        city: "jaipur",
      },
      cityState: "12",
      address: "1/39, Vidhyadhar Nagar, Jaipur",
      locality: "Sector 1",
      parentId: 184100,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2800,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2800,
        message: "",
        title: "Delivery Charge",
        amount: "2800",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "57532",
        deliveryTime: 40,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "349430",
      name: "Sethi Bar-Be-Que , Bani Park",
      uuid: "7f10206f-55eb-414a-8732-0e3081c705d6",
      city: "12",
      area: "Bani Park",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "zdbqnzpt7laqy88b7aic",
      cuisines: [
        "North Indian",
        "Chinese",
        "Biryani",
        "Punjabi",
        "Mughlai",
        "Kebabs",
        "Afghani",
      ],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 0.20000000298023224,
      slugs: {
        restaurant: "sethi-bar-be-que-sindhi-camp-sindhi-camp",
        city: "jaipur",
      },
      cityState: "12",
      address: "176,Sindhi Colony,Bani Park,Jaipur 302016",
      locality: "Sindhi Camp",
      parentId: 180073,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2000,
        message: "",
        title: "Delivery Charge",
        amount: "2000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "349430",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 0.20000000298023224,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

// --------------------- CONFIG - DRIVEN UI ------------------>

//(1) basic way - for a single component
/*
const RestaurantCard = () => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          restaurantList[0].data.cloudinaryImageId
        }
      />
      <h2>{restaurantList[0].data?.name}</h2>
      <h3>{restaurantList[0].data?.cuisines.join(", ")}</h3>
      <div className="component-inside-card">
        <h4>{restaurantList[0].data?.slaString}</h4>
        <h4>{restaurantList[0].data?.costForTwo}</h4>
      </div>
    </div>
  );
};
*/

// (2) for dynamically loading cards, we do like below
// props received = basically an object
// further alternatvies, for easier code -> we can also do DESTRUCTURING OF OBJECT

// ALTERNATIVE 1
/* 
const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          props.restaurant.data.cloudinaryImageId
        }
      />
      <h2>{props.restaurant.data.name}</h2>
      <h3 className="text-ellipsis">
        {props.restaurant.data.cuisines.join(", ")}
      </h3>
      <div className="component-inside-card">
        <h4>{props.restaurant.data.slaString}</h4>
        <h4>{props.restaurant.data.costForTwo}</h4>
      </div>
    </div>
  );
};
*/

// ALTERNATIVE 2 : DESTRUCTURING OF "PROP" OBJECT DONE
// replacing props with {restaurant}
/*
const RestaurantCard = ({ restaurant }) => {
  // console.log(props);
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          restaurant.data.cloudinaryImageId
        }
      />
      <h2>{restaurant.data.name}</h2>
      <h3 className="text-ellipsis">{restaurant.data.cuisines.join(", ")}</h3>
      <div className="component-inside-card">
        <h4>{restaurant.data.slaString}</h4>
        <h4>{restaurant.data.costForTwo}</h4>
      </div>
    </div>
  );
};
*/

// ALTERNATIVE 3 : FURTHER DESTRUCTURING OF {RESTAURANT}
// fetching needed values from restaurant.data object

/*
const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, name, cuisines, slaString, costForTwo } =
    restaurant.data;

  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3 className="text-ellipsis">{cuisines.join(", ")}</h3>
      <div className="component-inside-card">
        <h4>{slaString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};
*/

// ALTERNATIVE 4 : MORE DESTRUCTURING OF CODE (on the fly) --> using SPREAD OPERATOR(...)
// SPREAD OPERATOR -> just spreading your objects
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  slaString,
  costForTwo,
}) => {
  // const { cloudinaryImageId, name, cuisines, slaString, costForTwo } =
  //   restaurant.data;
  // console.log(props);
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3 className="text-ellipsis">{cuisines.join(", ")}</h3>
      <div className="component-inside-card">
        <h4>{slaString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

// PROPS (properties ): in below component, restaurant is a prop, so we are basically passing the data to the function while calling it, just like an argument
/*
const Body = () => {
  return (
    <div className="restaurant-List">
      <RestaurantCard restaurant={restaurantList[0]} />
      <RestaurantCard restaurant={restaurantList[1]} />
      <RestaurantCard restaurant={restaurantList[2]} />
      <RestaurantCard restaurant={restaurantList[3]} />
      <RestaurantCard restaurant={restaurantList[4]} />
      <RestaurantCard restaurant={restaurantList[5]} />
    </div>
  );
};
*/

// FOR ALTERNATIVE 4 : you can directly pass all the needed props from the whole restaurant object
// SPREAD OPERATOR = ...
/* for huge dynamic data, we use for loop or map function, instead of manually writing it many times*/
/* we can use either, map or for-each*/
const Body = () => {
  return (
    <div className="restaurant-list">
      {/* <RestaurantCard {...restaurantList[0].data} />
      <RestaurantCard {...restaurantList[1].data} />
      <RestaurantCard {...restaurantList[2].data} />
      <RestaurantCard {...restaurantList[3].data} />
      <RestaurantCard {...restaurantList[4].data} />
      <RestaurantCard {...restaurantList[5].data} /> */}

      {/* USING MAP FOR HUGE DATA  */}
      {/* it works in the following way :
      -> we have an array of objects => restaurantList
      -> we iterate that array using a map 
      -> now while iterating, for each object of that array or for each item of that array, we call the callback function 
      -> and in that function, we return the RestaurantCard
      -> inside the RestaurantCard, we pass that particular item or object (in spreaded form)
      -> this spreaded object is passed on as props to the RestaurantCard */}

      {restaurantList.map((restaurantobj) => {
        // console.log(restaurantobj);
        return (
          <RestaurantCard
            {...restaurantobj.data}
            key={restaurantobj.data?.id}
          />
        );
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="company">
        <a href="/">
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"></img>
        </a>
      </div>
      <div className="copyright">© 2023</div>
      <div className="media-apps">
        <img
          className="media-logo"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
        ></img>
        <img
          className="media-logo"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
        ></img>
        <img
          className="media-logo"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
        ></img>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("hello");
root.render(<AppLayout />);
