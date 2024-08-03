function calculate_body_type_footprint(body_type) {
    if (body_type === "slim") {
      return 0.5;
    } else {
      if (body_type === "average") {
        return 1.0;
      } else {
        if (body_type === "obese") {
          return 1.5;
        }
      }
    }
  }
  
  function calculate_sex_footprint(sex) {
    if (sex === "male") {
      return 0.8;
    } else {
      if (sex === "female") {
        return 0.7;
      }
    }
  }
  
  function calculate_diet_footprint(diet) {
    if (diet === "vegan") {
      return 0.4;
    } else {
      if (diet === "vegetarian") {
        return 0.6;
      } else {
        if (diet === "meat") {
          return 1.0;
        }
      }
    }
  }
  
  function calculate_shower_frequency_footprint(shower_frequency) {
    if (shower_frequency === "daily") {
      return 1.2;
    } else {
      if (shower_frequency === "every other day") {
        return 0.9;
      } else {
        if (shower_frequency === "weekly") {
          return 0.6;
        }
      }
    }
  }
  
  function calculate_heating_energy_source_footprint(heating_energy_source) {
    if (heating_energy_source === "gas") {
      return 10.1;
    } else {
      if (heating_energy_source === "electricity") {
        return 5.9;
      }
    }
  }
  
  function calculate_transport_footprint(transport) {
    if (transport === "driving") {
      return 20.0;
    } else {
      if (transport === "public transport") {
        return 10.8;
      } else {
        if (transport === "cycling") {
          return 10.4;
        }
      }
    }
  }
  
  function calculate_vehicle_type_footprint(vehicle_type) {
    if (vehicle_type === "gasoline") {
      return 15.5;
    } else {
      if (vehicle_type === "electric") {
        return 10.8;
      }
    }
  }
  
  function calculate_social_activity_footprint(social_activity) {
    if (social_activity === "active") {
      return 10.2;
    } else {
      if (social_activity === "moderate") {
        return 5.9;
      } else {
        if (social_activity === "sedentary") {
          return 2.6;
        }
      }
    }
  }
  
  function calculate_monthly_grocery_bill_footprint(monthly_grocery_bill) {
    if (monthly_grocery_bill < 50) {
      return 10.4;
    } else {
      if (monthly_grocery_bill < 100) {
        return 20.6;
      } else {
        if (monthly_grocery_bill >= 100) {
          return 30.8;
        }
      }
    }
  }
  
  function calculate_frequency_of_traveling_by_air_footprint(frequency_of_traveling_by_air) {
    if (frequency_of_traveling_by_air === "frequent") {
      return 30.0;
    } else {
      if (frequency_of_traveling_by_air === "occasional") {
        return 11.5;
      } else {
        if (frequency_of_traveling_by_air === "rarely") {
          return 10.8;
        }
      }
    }
  }
  
  function calculate_vehicle_monthly_distance_km_footprint(vehicle_monthly_distance_km) {
    if (vehicle_monthly_distance_km < 500) {
      return 10.4;
    } else {
      if (vehicle_monthly_distance_km < 1000) {
        return 20.6;
      } else {
        if (vehicle_monthly_distance_km >= 1000) {
          return 30.8;
        }
      }
    }
  }
  
  function calculate_waste_bag_size_footprint(waste_bag_size) {
    if (waste_bag_size === "small") {
      return 10.2;
    } else {
      if (waste_bag_size === "medium") {
        return 20.4;
      } else {
        if (waste_bag_size === "large") {
          return 30.6;
        }
      }
    }
  }
  
  function calculate_waste_bag_weekly_count_footprint(waste_bag_weekly_count) {
    if (waste_bag_weekly_count < 2) {
      return 10.1;
    } else {
      if (waste_bag_weekly_count < 5) {
        return 20.3;
      } else {
        if (waste_bag_weekly_count >= 5) {
          return 30.5;
        }
      }
    }
  }
  
  function calculate_tv_pc_hour_footprint(tv_pc_hour) {
    if (tv_pc_hour < 2) {
      return 10.1;
    } else {
      if (tv_pc_hour < 4) {
        return 20.3;
      } else {
        if (tv_pc_hour >= 4) {
          return 30.5;
        }
      }
    }
  }
  
  function calculate_daily_hour_footprint(daily_hour) {
    if (daily_hour < 8) {
      return 10.4;
    } else {
      if (daily_hour < 10) {
        return 20.6;
      } else {
        if (daily_hour >= 10) {
          return 30.8;
        }
      }
    }
  }
  
  function calculate_frequency_of_new_clothes_footprint(frequency_of_new_clothes) {
    if (frequency_of_new_clothes === "frequent") {
      return 11.5;
    } else {
      if (frequency_of_new_clothes === "occasional") {
        return 10.9;
      } else {
        if (frequency_of_new_clothes === "rarely") {
          return 10.4;
        }
      }
    }
  }
  
  function calculate_internet_daily_hour_footprint(internet_daily_hour) {
    if (internet_daily_hour < 2) {
      return 10.2;
    } else {
      if (internet_daily_hour < 4) {
        return 20.4;
      } else {
        if (internet_daily_hour >= 4) {
          return 30.6;
        }
      }
    }
  }
  
  function calculate_energy_efficiency_footprint(energy_efficiency) {
    if (energy_efficiency === "high") {
      return 10.8;
    } else {
      if (energy_efficiency === "medium") {
        return 10.5;
      } else {
        if (energy_efficiency === "low") {
          return 10.2;
        }
      }
    }
  }
  
  function calculate_recycling_footprint(recycling) {
    if (recycling === "yes") {
      return 10.2;
    } else {
      if (recycling === "no") {
        return 10.8;
      }
    }
  }
  
  function calculate_cooking_with_footprint(cooking_with) {
    if (cooking_with === "electric") {
      return 10.9;
    } else {
      if (cooking_with === "gas") {
        return 21.1;
      }
    }
  }
  
  function main() {
    var body_type, body_type_footprint, cooking_with, cooking_with_footprint, daily_hour, daily_hour_footprint, diet, diet_footprint, energy_efficiency, energy_efficiency_footprint, frequency_of_new_clothes, frequency_of_new_clothes_footprint, frequency_of_traveling_by_air, frequency_of_traveling_by_air_footprint, heating_energy_source, heating_energy_source_footprint, internet_daily_hour, internet_daily_hour_footprint, monthly_grocery_bill, monthly_grocery_bill_footprint, recycling, recycling_footprint, sex, sex_footprint, shower_frequency, shower_frequency_footprint, social_activity, social_activity_footprint, total_footprint, transport, transport_footprint, tv_pc_hour, tv_pc_hour_footprint, vehicle_monthly_distance_km, vehicle_monthly_distance_km_footprint, vehicle_type, vehicle_type_footprint, waste_bag_size, waste_bag_size_footprint, waste_bag_weekly_count, waste_bag_weekly_count_footprint;
    st.set_page_config({
      "layout": "wide",
      "page_title": "Carbon Footprint Calculator",
      "page_icon": "./media/favicon.ico"
    });
    st.header("Calculate your carbon footprint");
    body_type = st.selectbox("Body Type", ["slim", "average", "obese"]);
    sex = st.selectbox("Sex", ["male", "female"]);
    diet = st.selectbox("Diet", ["vegan", "vegetarian", "meat"]);
    shower_frequency = st.selectbox("Shower Frequency", ["daily", "every other day", "weekly"]);
    heating_energy_source = st.selectbox("Heating Energy Source", ["gas", "electricity"]);
    transport = st.selectbox("Transport", ["driving", "public transport", "cycling"]);
    vehicle_type = st.selectbox("Vehicle Type", ["gasoline", "electric"]);
    social_activity = st.selectbox("Social Activity", ["active", "moderate", "sedentary"]);
    monthly_grocery_bill = st.number_input("Monthly Grocery Bill");
    frequency_of_traveling_by_air = st.selectbox("Frequency of Traveling by Air", ["frequent", "occasional", "rarely"]);
    vehicle_monthly_distance_km = st.number_input("Vehicle Monthly Distance (km)");
    waste_bag_size = st.selectbox("Waste Bag Size", ["small", "medium", "large"]);
    waste_bag_weekly_count = st.number_input("Waste Bag Weekly Count");
    tv_pc_hour = st.number_input("TV/PC Hour");
    daily_hour = st.number_input("Daily Hour");
    frequency_of_new_clothes = st.selectbox("Frequency of New Clothes", ["frequent", "occasional", "rarely"]);
    internet_daily_hour = st.number_input("Internet Daily Hour");
    energy_efficiency = st.selectbox("Energy Efficiency", ["high", "medium", "low"]);
    recycling = st.selectbox("Recycling", ["yes", "no"]);
    cooking_with = st.selectbox("Cooking With", ["electric", "gas"]);
    body_type_footprint = calculate_body_type_footprint(body_type);
    sex_footprint = calculate_sex_footprint(sex);
    diet_footprint = calculate_diet_footprint(diet);
    shower_frequency_footprint = calculate_shower_frequency_footprint(shower_frequency);
    heating_energy_source_footprint = calculate_heating_energy_source_footprint(heating_energy_source);
    transport_footprint = calculate_transport_footprint(transport);
    vehicle_type_footprint = calculate_vehicle_type_footprint(vehicle_type);
    social_activity_footprint = calculate_social_activity_footprint(social_activity);
    monthly_grocery_bill_footprint = calculate_monthly_grocery_bill_footprint(monthly_grocery_bill);
    frequency_of_traveling_by_air_footprint = calculate_frequency_of_traveling_by_air_footprint(frequency_of_traveling_by_air);
    vehicle_monthly_distance_km_footprint = calculate_vehicle_monthly_distance_km_footprint(vehicle_monthly_distance_km);
    waste_bag_size_footprint = calculate_waste_bag_size_footprint(waste_bag_size);
    waste_bag_weekly_count_footprint = calculate_waste_bag_weekly_count_footprint(waste_bag_weekly_count);
    tv_pc_hour_footprint = calculate_tv_pc_hour_footprint(tv_pc_hour);
    daily_hour_footprint = calculate_daily_hour_footprint(daily_hour);
    frequency_of_new_clothes_footprint = calculate_frequency_of_new_clothes_footprint(frequency_of_new_clothes);
    internet_daily_hour_footprint = calculate_internet_daily_hour_footprint(internet_daily_hour);
    energy_efficiency_footprint = calculate_energy_efficiency_footprint(energy_efficiency);
    recycling_footprint = calculate_recycling_footprint(recycling);
    cooking_with_footprint = calculate_cooking_with_footprint(cooking_with);
    total_footprint = body_type_footprint + sex_footprint + diet_footprint + shower_frequency_footprint + heating_energy_source_footprint + transport_footprint + vehicle_type_footprint + social_activity_footprint + monthly_grocery_bill_footprint + frequency_of_traveling_by_air_footprint + vehicle_monthly_distance_km_footprint + waste_bag_size_footprint + waste_bag_weekly_count_footprint + tv_pc_hour_footprint + daily_hour_footprint + frequency_of_new_clothes_footprint + internet_daily_hour_footprint + energy_efficiency_footprint + recycling_footprint + cooking_with_footprint;
    st.write("Your carbon footprint is:", total_footprint);
  
    if (total_footprint > 250) {
      st.write("Consider reducing your energy consumption and transportation habits.");
    } else {
      if (total_footprint > 350) {
        st.write("Consider reducing your energy consumption and food choices.");
      } else {
        st.write("Great job! Your carbon footprint is already low.");
      }
    }
  }
  
  if (_name_ === "_main_") {
    main();
  }