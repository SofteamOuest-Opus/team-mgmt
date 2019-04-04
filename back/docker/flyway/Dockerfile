FROM openjdk:8-jre

WORKDIR /flyway

ENV FLYWAY_VERSION 5.2.4

RUN curl -L https://repo1.maven.org/maven2/org/flywaydb/flyway-commandline/${FLYWAY_VERSION}/flyway-commandline-${FLYWAY_VERSION}.tar.gz -o flyway-commandline-${FLYWAY_VERSION}.tar.gz \
  && tar -xzf flyway-commandline-${FLYWAY_VERSION}.tar.gz --strip-components=1 \
  && rm flyway-commandline-${FLYWAY_VERSION}.tar.gz \
  && ln -s /flyway/flyway /usr/local/bin/flyway


COPY ./wait-for-postgres.sh /usr/local/bin/

RUN ln -s /usr/local/bin/wait-for-postgres.sh /

RUN chmod u+x /usr/local/bin/wait-for-postgres.sh

ADD flyway.conf ./conf/flyway.conf

COPY /migration ./migration

ENTRYPOINT ["wait-for-postgres.sh"]
CMD ["-?"]