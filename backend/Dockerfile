FROM hseeberger/scala-sbt:11.0.16_1.8.0_1.7.2

WORKDIR /app
COPY . .

# Compile und Stage
RUN sbt clean compile stage

# Start der Play App
CMD ["./target/universal/stage/bin/backend", "-Dplay.http.secret.key=changeme"]

EXPOSE 9000
