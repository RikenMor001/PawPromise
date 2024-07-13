let dogs = [
  { "ID":1,
    "BasicInfo": {
      "Name": "Sparky",
      "Breed": "Dachshund",
      "Age": 19,
      "Gender": "Male",
      "Size": "Medium",
      "Weight": 27,
      "Color": "Black"
    },
    "HealthInformation": {
      "VaccinationStatus": "Moderately vaccinated",
      "NeuteredStatus": "Yes",
      "Microchipped": "No",
      "MedicalHistory": ["Fatigue", "Fever"],
      "CurrentMedications": ["Paracetamol", "DogPaste"],
      "Allergies": []
    },
    "BehavioralInformation": {
      "Temperament": "Shy",
      "EnergyLevel": "High",
      "CompatibilityWithOtherPets": ["dogs", "cats"],
      "CompatibilityWithChildren": "Yes",
      "Training": "House-Trained",
      "SpecialBehaviors": ["Barking", "Chewing"]
    },
    "BackgroundStory": {
      "RescueStory": "We know that rescue shelter dogs don’t live the happiest lives out there, at least not until they are adopted. However, one shelter, Kitsap Humane Society from Washington, truly goes the extra length to make their dogs feel welcomed during their time in the shelter, which is why it's not featured among the best dog rescue stories out there",
      "PreviousOwners": "They were very loving, they've raised this dog like their own child and definitely would cause no harm to dog",
      "LifeExperiences": "He's once saved someone from drowning",
      "AnySpecialTraitsOrTalents": "He can do handshakes! lala"
    },
    "CareAndMaintenance": {
      "Diet": ["Veggies", "Meat", "Pedigree"],
      "ExerciseNeeds": "Goes for a walk in the morning",
      "GroomingNeeds": "Ticks need to be taken care of"
    },
    "AdditionalInformation": {
      "SpecialNeeds": "None",
      "FavoriteActivitiesAndToys": "Bone",
      "BestEnvironment": "Park"
    }
  },
  {  "ID":2,
    "BasicInfo": {
      "Name": "Bella",
      "Breed": "Labrador Retriever",
      "Age": 4,
      "Gender": "Female",
      "Size": "Large",
      "Weight": 65,
      "Color": "Yellow"
    },
    "HealthInformation": {
      "VaccinationStatus": "Fully vaccinated",
      "NeuteredStatus": "Yes",
      "Microchipped": "Yes",
      "MedicalHistory": ["Hip Dysplasia"],
      "CurrentMedications": ["Glucosamine"],
      "Allergies": ["Grains"]
    },
    "BehavioralInformation": {
      "Temperament": "Friendly",
      "EnergyLevel": "Medium",
      "CompatibilityWithOtherPets": ["dogs"],
      "CompatibilityWithChildren": "Yes",
      "Training": "Obedience-Trained",
      "SpecialBehaviors": ["Fetching", "Swimming"]
    },
    "BackgroundStory": {
      "RescueStory": "Bella was found wandering the streets and was rescued by a kind-hearted individual who brought her to the shelter. Since then, she has been thriving and showing her loving nature.",
      "PreviousOwners": "Unknown",
      "LifeExperiences": "Bella has been trained as a therapy dog and has provided comfort to many people.",
      "AnySpecialTraitsOrTalents": "She can detect emotional distress and offer comfort."
    },
    "CareAndMaintenance": {
      "Diet": ["Chicken", "Rice", "Vegetables"],
      "ExerciseNeeds": "Requires daily walks and playtime",
      "GroomingNeeds": "Regular brushing and occasional baths"
    },
    "AdditionalInformation": {
      "SpecialNeeds": "Needs a grain-free diet",
      "FavoriteActivitiesAndToys": "Loves playing fetch with a tennis ball",
      "BestEnvironment": "A home with a yard"
    }
  },
  { "ID":3,
    "BasicInfo": {
      "Name": "Max",
      "Breed": "German Shepherd",
      "Age": 7,
      "Gender": "Male",
      "Size": "Large",
      "Weight": 75,
      "Color": "Black and Tan"
    },
    "HealthInformation": {
      "VaccinationStatus": "Fully vaccinated",
      "NeuteredStatus": "Yes",
      "Microchipped": "Yes",
      "MedicalHistory": ["Arthritis"],
      "CurrentMedications": ["Pain relievers"],
      "Allergies": ["Pollen"]
    },
    "BehavioralInformation": {
      "Temperament": "Protective",
      "EnergyLevel": "High",
      "CompatibilityWithOtherPets": ["dogs"],
      "CompatibilityWithChildren": "Yes",
      "Training": "Guard-Trained",
      "SpecialBehaviors": ["Barking", "Protective"]
    },
    "BackgroundStory": {
      "RescueStory": "Max was surrendered by his previous owner due to a change in living circumstances. He has been well-cared for and trained.",
      "PreviousOwners": "A single-family home with children",
      "LifeExperiences": "Max has been trained as a guard dog and is very protective of his family.",
      "AnySpecialTraitsOrTalents": "He can perform advanced obedience commands."
    },
    "CareAndMaintenance": {
      "Diet": ["High-protein dog food", "Vegetables"],
      "ExerciseNeeds": "Requires daily exercise and mental stimulation",
      "GroomingNeeds": "Regular brushing to manage shedding"
    },
    "AdditionalInformation": {
      "SpecialNeeds": "Requires joint supplements",
      "FavoriteActivitiesAndToys": "Loves playing tug-of-war",
      "BestEnvironment": "A home with a large yard"
    }
  },
  { "ID":4,
    "BasicInfo": {
      "Name": "Luna",
      "Breed": "Beagle",
      "Age": 3,
      "Gender": "Female",
      "Size": "Medium",
      "Weight": 22,
      "Color": "Tri-color"
    },
    "HealthInformation": {
      "VaccinationStatus": "Fully vaccinated",
      "NeuteredStatus": "Yes",
      "Microchipped": "Yes",
      "MedicalHistory": ["Ear infections"],
      "CurrentMedications": ["Antibiotics"],
      "Allergies": ["None"]
    },
    "BehavioralInformation": {
      "Temperament": "Curious",
      "EnergyLevel": "High",
      "CompatibilityWithOtherPets": ["dogs", "cats"],
      "CompatibilityWithChildren": "Yes",
      "Training": "Basic Obedience",
      "SpecialBehaviors": ["Howling"]
    },
    "BackgroundStory": {
      "RescueStory": "Luna was found abandoned in a park and was brought to the shelter by a passerby. She has been thriving and is ready for her forever home.",
      "PreviousOwners": "Unknown",
      "LifeExperiences": "Luna loves exploring new environments and is very curious.",
      "AnySpecialTraitsOrTalents": "She has a great sense of smell and loves tracking scents."
    },
    "CareAndMaintenance": {
      "Diet": ["Dry kibble", "Canned food"],
      "ExerciseNeeds": "Requires daily walks and playtime",
      "GroomingNeeds": "Regular ear cleaning and occasional baths"
    },
    "AdditionalInformation": {
      "SpecialNeeds": "None",
      "FavoriteActivitiesAndToys": "Loves sniffing around and playing with squeaky toys",
      "BestEnvironment": "A home with an active family"
    }
  },
  { "ID":5,
    "BasicInfo": {
      "Name": "Charlie",
      "Breed": "Poodle",
      "Age": 5,
      "Gender": "Male",
      "Size": "Medium",
      "Weight": 50,
      "Color": "White"
    },
    "HealthInformation": {
      "VaccinationStatus": "Fully vaccinated",
      "NeuteredStatus": "Yes",
      "Microchipped": "Yes",
      "MedicalHistory": ["Allergies"],
      "CurrentMedications": ["Antihistamines"],
      "Allergies": ["Dust"]
    },
    "BehavioralInformation": {
      "Temperament": "Intelligent",
      "EnergyLevel": "Medium",
      "CompatibilityWithOtherPets": ["dogs"],
      "CompatibilityWithChildren": "Yes",
      "Training": "Advanced Obedience",
      "SpecialBehaviors": ["Fetching"]
    },
    "BackgroundStory": {
      "RescueStory": "Charlie was surrendered to the shelter after his owner passed away. He is a very intelligent and well-behaved dog.",
      "PreviousOwners": "An elderly couple",
      "LifeExperiences": "Charlie has been trained in advanced obedience and can perform many tricks.",
      "AnySpecialTraitsOrTalents": "He can perform complex tricks and tasks."
    },
    "CareAndMaintenance": {
      "Diet": ["Hypoallergenic dog food"],
      "ExerciseNeeds": "Requires regular exercise and mental stimulation",
      "GroomingNeeds": "Regular grooming and haircuts"
    },
    "AdditionalInformation": {
      "SpecialNeeds": "Hypoallergenic diet",
      "FavoriteActivitiesAndToys": "Loves playing fetch with a Frisbee",
      "BestEnvironment": "A home with space to run and play"
    }
  },
  {  
    "ID":6,
    "BasicInfo": {
      "Name": "Molly",
      "Breed": "Bulldog",
      "Age": 6,
      "Gender": "Female",
      "Size": "Medium",
      "Weight": 45,
      "Color": "Brindle"
    },
    "HealthInformation": {
      "VaccinationStatus": "Fully vaccinated",
      "NeuteredStatus": "Yes",
      "Microchipped": "Yes",
      "MedicalHistory": ["Skin infections"],
      "CurrentMedications": ["Antibiotics"],
      "Allergies": ["Grass"]
    },
    "BehavioralInformation": {
      "Temperament": "Gentle",
      "EnergyLevel": "Low",
      "CompatibilityWithOtherPets": ["dogs"],
      "CompatibilityWithChildren": "Yes",
      "Training": "House-Trained",
      "SpecialBehaviors": ["Snoring"]
    },
    "BackgroundStory": {
      "RescueStory": "Molly was rescued from a puppy mill where she was used for breeding. She has since been rehabilitated and is ready for a loving home.",
      "PreviousOwners": "Unknown",
      "LifeExperiences": "Molly has overcome many health challenges and is now a healthy and happy dog.",
      "AnySpecialTraitsOrTalents": "She has a very gentle and loving nature."
    },
    "CareAndMaintenance": {
      "Diet": ["High-quality dry food"],
      "ExerciseNeeds": "Requires minimal exercise",
      "GroomingNeeds": "Regular skin care and cleaning"
    },
    "AdditionalInformation": {
      "SpecialNeeds": "Regular vet check-ups for skin conditions",
      "FavoriteActivitiesAndToys": "Loves lounging and chewing on soft toys",
      "BestEnvironment": "A quiet home with minimal activity"
    }
  },
  { "ID":7,
    "BasicInfo": {
      "Name": "Rocky",
      "Breed": "Boxer",
      "Age": 2,
      "Gender": "Male",
      "Size": "Large",
      "Weight": 70,
      "Color": "Fawn"
    },
    "HealthInformation": {
      "VaccinationStatus": "Fully vaccinated",
      "NeuteredStatus": "Yes",
      "Microchipped": "Yes",
      "MedicalHistory": ["None"],
      "CurrentMedications": ["None"],
      "Allergies": ["None"]
    },
    "BehavioralInformation": {
      "Temperament": "Energetic",
      "EnergyLevel": "High",
      "CompatibilityWithOtherPets": ["dogs"],
      "CompatibilityWithChildren": "Yes",
      "Training": "Basic Obedience",
      "SpecialBehaviors": ["Jumping"]
    },
    "BackgroundStory": {
      "RescueStory": "Rocky was surrendered to the shelter due to his owner's inability to care for him. He is a very energetic and playful dog.",
      "PreviousOwners": "A young couple",
      "LifeExperiences": "Rocky loves to play and has a lot of energy.",
      "AnySpecialTraitsOrTalents": "He can jump very high and loves to play fetch."
    },
    "CareAndMaintenance": {
      "Diet": ["High-energy dog food"],
      "ExerciseNeeds": "Requires a lot of exercise and playtime",
      "GroomingNeeds": "Minimal grooming required"
    },
    "AdditionalInformation": {
      "SpecialNeeds": "None",
      "FavoriteActivitiesAndToys": "Loves playing fetch with a ball",
      "BestEnvironment": "A home with a large yard and active owners"
    }
  },
  { "ID":8,
    "BasicInfo": {
      "Name": "Daisy",
      "Breed": "Golden Retriever",
      "Age": 5,
      "Gender": "Female",
      "Size": "Large",
      "Weight": 60,
      "Color": "Golden"
    },
    "HealthInformation": {
      "VaccinationStatus": "Fully vaccinated",
      "NeuteredStatus": "Yes",
      "Microchipped": "Yes",
      "MedicalHistory": ["Ear infections"],
      "CurrentMedications": ["Antibiotics"],
      "Allergies": ["None"]
    },
    "BehavioralInformation": {
      "Temperament": "Friendly",
      "EnergyLevel": "Medium",
      "CompatibilityWithOtherPets": ["dogs", "cats"],
      "CompatibilityWithChildren": "Yes",
      "Training": "Advanced Obedience",
      "SpecialBehaviors": ["Fetching"]
    },
    "BackgroundStory": {
      "RescueStory": "Daisy was rescued from a neglectful situation and has since been thriving in the shelter.",
      "PreviousOwners": "Unknown",
      "LifeExperiences": "Daisy loves water and is an excellent swimmer.",
      "AnySpecialTraitsOrTalents": "She is very good at fetching and loves to play in the water."
    },
    "CareAndMaintenance": {
      "Diet": ["High-quality dog food"],
      "ExerciseNeeds": "Requires daily exercise and playtime",
      "GroomingNeeds": "Regular grooming and ear cleaning"
    },
    "AdditionalInformation": {
      "SpecialNeeds": "Regular ear cleaning",
      "FavoriteActivitiesAndToys": "Loves playing fetch and swimming",
      "BestEnvironment": "A home with access to water or a pool"
    }
  },
  { "ID":9,
    "BasicInfo": {
      "Name": "Buddy",
      "Breed": "Shih Tzu",
      "Age": 8,
      "Gender": "Male",
      "Size": "Small",
      "Weight": 15,
      "Color": "White and Brown"
    },
    "HealthInformation": {
      "VaccinationStatus": "Fully vaccinated",
      "NeuteredStatus": "Yes",
      "Microchipped": "Yes",
      "MedicalHistory": ["Dental issues"],
      "CurrentMedications": ["Dental chews"],
      "Allergies": ["None"]
    },
    "BehavioralInformation": {
      "Temperament": "Calm",
      "EnergyLevel": "Low",
      "CompatibilityWithOtherPets": ["dogs"],
      "CompatibilityWithChildren": "Yes",
      "Training": "House-Trained",
      "SpecialBehaviors": ["Snoring"]
    },
    "BackgroundStory": {
      "RescueStory": "Buddy was surrendered to the shelter due to his owner's inability to care for him. He is a very calm and loving dog.",
      "PreviousOwners": "An elderly individual",
      "LifeExperiences": "Buddy loves to relax and is very low-maintenance.",
      "AnySpecialTraitsOrTalents": "He has a very calming presence and is great with children."
    },
    "CareAndMaintenance": {
      "Diet": ["Senior dog food"],
      "ExerciseNeeds": "Requires minimal exercise",
      "GroomingNeeds": "Regular grooming and dental care"
    },
    "AdditionalInformation": {
      "SpecialNeeds": "Regular dental check-ups",
      "FavoriteActivitiesAndToys": "Loves lounging and playing with soft toys",
      "BestEnvironment": "A quiet home with minimal activity"
    }
  },
  { "ID":10,
    "BasicInfo": {
      "Name": "Lucy",
      "Breed": "Pomeranian",
      "Age": 3,
      "Gender": "Female",
      "Size": "Small",
      "Weight": 7,
      "Color": "Orange"
    },
    "HealthInformation": {
      "VaccinationStatus": "Fully vaccinated",
      "NeuteredStatus": "Yes",
      "Microchipped": "Yes",
      "MedicalHistory": ["None"],
      "CurrentMedications": ["None"],
      "Allergies": ["None"]
    },
    "BehavioralInformation": {
      "Temperament": "Playful",
      "EnergyLevel": "High",
      "CompatibilityWithOtherPets": ["dogs"],
      "CompatibilityWithChildren": "Yes",
      "Training": "Basic Obedience",
      "SpecialBehaviors": ["Barking"]
    },
    "BackgroundStory": {
      "RescueStory": "Lucy was rescued from a puppy mill where she was used for breeding. She is now a happy and playful dog.",
      "PreviousOwners": "Unknown",
      "LifeExperiences": "Lucy loves to play and is very energetic.",
      "AnySpecialTraitsOrTalents": "She can do a few tricks like sit and stay."
    },
    "CareAndMaintenance": {
      "Diet": ["Small breed dog food"],
      "ExerciseNeeds": "Requires regular playtime and short walks",
      "GroomingNeeds": "Regular brushing and grooming"
    },
    "AdditionalInformation": {
      "SpecialNeeds": "None",
      "FavoriteActivitiesAndToys": "Loves playing with small squeaky toys",
      "BestEnvironment": "A home with space to play"
    }
  },
  { "ID":11,
    "BasicInfo": {
      "Name": "Cooper",
      "Breed": "Border Collie",
      "Age": 6,
      "Gender": "Male",
      "Size": "Medium",
      "Weight": 45,
      "Color": "Black and White"
    },
    "HealthInformation": {
      "VaccinationStatus": "Fully vaccinated",
      "NeuteredStatus": "Yes",
      "Microchipped": "Yes",
      "MedicalHistory": ["None"],1
      "CurrentMedications": ["None"],
      "Allergies": ["None"]
    },
    "BehavioralInformation": {
      "Temperament": "Intelligent",
      "EnergyLevel": "High",
      "CompatibilityWithOtherPets": ["dogs", "cats"],
      "CompatibilityWithChildren": "Yes",
      "Training": "Advanced Obedience",
      "SpecialBehaviors": ["Herding"]
    },
    "BackgroundStory": {
      "RescueStory": "Cooper was rescued from a neglectful situation and has since been thriving in the shelter.",
      "PreviousOwners": "Unknown",
      "LifeExperiences": "Cooper is very intelligent and loves to learn new things.",
      "AnySpecialTraitsOrTalents": "He is great at herding and can perform many tricks."
    },
    "CareAndMaintenance": {
      "Diet": ["High-energy dog food"],
      "ExerciseNeeds": "Requires a lot of exercise and mental stimulation",
      "GroomingNeeds": "Regular brushing and grooming"
    },
    "AdditionalInformation": {
      "SpecialNeeds": "Needs regular mental stimulation",
      "FavoriteActivitiesAndToys": "Loves playing fetch and learning new tricks",
      "BestEnvironment": "A home with space to run and play"
    }
  }
];

export default dogs
