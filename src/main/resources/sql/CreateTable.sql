DROP TABLE IF EXISTS obrazovanje CASCADE;
DROP TABLE IF EXISTS preduzece CASCADE;
DROP TABLE IF EXISTS sektor CASCADE;
DROP TABLE IF EXISTS radnik CASCADE;


CREATE TABLE obrazovanje(
	id integer not null,
    naziv varchar(100) not null,
    stepen_strucne_spreme varchar(10) not null,
    opis varchar(500)not null
);

CREATE TABLE preduzece(
	id integer not null,
    naziv varchar(100) not null,
    pib integer not null,
    sediste varchar(100) not null,
    opis varchar(500)not null
);

CREATE TABLE sektor(
	id integer not null,
    naziv varchar(100) not null,
    oznaka varchar(10),
    preduzece integer not null
);

CREATE TABLE radnik(
	id integer not null,
    ime varchar(50) not null,
    prezime varchar(50) not null,
    broj_lk integer not null,
    obrazovanje integer not null,
    sektor integer not null
);

ALTER TABLE obrazovanje ADD CONSTRAINT pk_obrazovanje PRIMARY KEY(id);
ALTER TABLE preduzece ADD CONSTRAINT pk_preduzece PRIMARY KEY(id);
ALTER TABLE sektor ADD CONSTRAINT pk_sektor PRIMARY KEY(id);
ALTER TABLE radnik ADD CONSTRAINT pk_radnik PRIMARY KEY(id);

ALTER TABLE sektor ADD CONSTRAINT fk_sektor_preduzece FOREIGN KEY(preduzece) REFERENCES preduzece(id);
ALTER TABLE radnik ADD CONSTRAINT fk_radnik_obrazovanje FOREIGN KEY(obrazovanje) REFERENCES obrazovanje(id);
ALTER TABLE radnik ADD CONSTRAINT fk_radnik_sektor FOREIGN KEY(sektor) REFERENCES sektor(id);

CREATE INDEX idxpk_obrazovanje ON obrazovanje(id);
CREATE INDEX idxpk_preduzece ON preduzece(id);
CREATE INDEX idxpk_sektor ON sektor(id);
CREATE INDEX idxpk_radnik ON radnik(id);

CREATE INDEX idxkf_sektor_preduzece ON sektor(preduzece);
CREATE INDEX idxfk_radnik_obrazovanje ON radnik(obrazovanje);
CREATE INDEX idxfk_radnik_sektor ON radnik(sektor);
