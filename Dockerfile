FROM openjdk:11

COPY target/chutesal-0.0.1-SNAPSHOT.jar chutesal-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/chutesal-0.0.1-SNAPSHOT.jar"]
