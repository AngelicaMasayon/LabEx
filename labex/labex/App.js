import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [currentSection, setCurrentSection] = useState('name');

  const resumeData = {
    imageUrl: require('./ACM.JPG'),
    name: 'Masayon, Angelica C.',
    course: ' Bachelor of Science in Information Technology',
    education: {
      elementary: 'Esteban Abada Elementary School',
      elementaryYear: '2014',
      highschool: 'Bagong Barrio National High School',
      highschoolYear: '2018',
      college: 'Global Reciprocal Colleges',
      collegeYear: '2026',
    },
    about: 'IT student currently studying at Global Reciprocal Colleges. In my Third year College in second semester.',
    projects: {
      projectName: "SysArch - BrewsTea",
      imageSrc: 'https://www.facebook.com/photo/?fbid=122094074666179972&set=a.122094073064179972%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F703%2F703017.png',
      link: 'https://www.facebook.com/profile.php?id=61555399162340',
      description: 'Our project was about the Inventory Management Syste,, Ordering, Sales, Generating Sales Report, and enables the customer to order and also enabling the owner or employees to manage the whole sales. It is named Integrated Ordering, Sales, and Inventory Management System'

    },
    contact: {
      mobile: '09158980482',
      email: 'masayon.angelica.c@gmail.com',
    },
  };

  const handlePress = () => {
    setCurrentSection((prevSection) => {
      switch (prevSection) {
        case 'name':
          return "education";
        case 'education':
          return 'about';
        case 'about':
          return 'projects';
        case 'projects':
          return 'contact';
        case 'contact':
          return 'name';
        default:
          return 'name';
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handlePress} style={styles.contentContainerStyle}>
          {currentSection === 'name' && (
            <>
              <Image source={resumeData.imageUrl} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.header}>{resumeData.name}</Text>
                <Text style={styles.info}>{resumeData.course}</Text>
              </View>
            </>
          )}

          {currentSection === 'education' && (
            <View style={styles.textContainer}>
              <Text style={styles.header}>Education</Text>
              <Text>{`\nCollege: ${resumeData.education.college} | ${resumeData.education.collegeYear}`}</Text>
              <Text>{`\nHigh School: ${resumeData.education.highschool} | ${resumeData.education.highschoolYear}`}</Text>
              <Text>{`\nElementary: ${resumeData.education.elementary} | ${resumeData.education.elementaryYear}`}</Text>
            </View>
          )}

          {currentSection === 'about' && (
            <View style={styles.textContainer}>
              <Text style={styles.header}>About me:</Text>
              <Text>{`\n${resumeData.about}`}</Text>
            </View>
          )}

          {currentSection === 'projects' && (
            <View style={styles.projectContainer}>
              <Text style={styles.header}>Projects:</Text>
              <Text style={styles.projectTitle}>{resumeData.projects.projectName}</Text>
              <Image source={{ uri: resumeData.projects.imageSrc }} style={styles.projectImage} />
              <Text style={styles.projectLink}>{resumeData.projects.link}</Text>
              <Text style={styles.projectDescription}>{resumeData.projects.description}</Text>
            </View>
          )}

          {currentSection === 'contact' && (
            <View style={styles.textContainer}>
              <Text style={styles.header}>Contact:</Text>
              <Text>{`\nMobile: ${resumeData.contact.mobile}`}</Text>
              <Text>{`\nEmail: ${resumeData.contact.email}`}</Text>
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
  },
  projectContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  projectImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  projectLink: {
    color: 'blue',
    marginBottom: 5,
  },
  projectDescription: {
    fontSize: 14,
  },
});

export default App;