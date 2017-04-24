-- OBRAZOVANJE --
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis)
	VALUES(1, 'Osnovna škola', 'II', 'Završena osnovna škola (4 godine za stepen, 8 godina ukupno)');
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis)
	VALUES(2, 'Srednja stručna sprema', 'IV', 'Završena srednja škola (4 godine za stepen, 12 godina ukupno)');
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis)
    VALUES(3, 'Viša škola', 'VI', 'Trogodišnje studije (3 godine za stepen, 15 godina ukupno)');
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis)
	VALUES(4, 'Osnovne akademske studije', 'VII', 'Četvorogodišnje studije (4 godine za stepen, 16 godina ukupno)');
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis)
    VALUES(5, 'Magistratura', 'VII-2', 'Magistar nauka, MR, (2 godine za stepen, 19 godina ukupno)');
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis)
    VALUES(6, 'Doktorak, ', 'VIII', 'Doktor nauka (1 godina za stepen, 20 godina ukupno)');

-- PREDUZECE --
INSERT INTO preduzece(id, naziv, pib, sediste, opis)
	VALUES(1, 'Telekom Srbija', 100002887, 'Takovska 2, 11000 Beograd', 'Državni operаtor mobilne i fiksne telefonije u Srbiji.');
INSERT INTO preduzece(id, naziv, pib, sediste, opis)
	VALUES(2, 'Delez', 103482850, 'Jurija Gagarina 14, 11070 Beograd', 'Privredno društvo u sastavu grupe Ahold Delhaize');
INSERT INTO preduzece(id, naziv, pib, sediste, opis)
	VALUES(3, 'Continental Srbija', 107229570, 'Batinska 94,24000 Subotica', 'Continental  je podeljena u Automotiv grupu i Grupu za gume.');
INSERT INTO preduzece(id, naziv, pib, sediste, opis)
	VALUES(4, 'NIS', 104052135, 'Narodnog fronta 12, 21000 Novi Sad', 'Naftna industrija Srbije u većinskom vlasništvu Gasprom Nafta.');
INSERT INTO preduzece(id, naziv, pib, sediste, opis)
	VALUES(5, 'Tarkett d.o.o.', 104052135, 'Industrijska zona bb, 21400 Bačka Palanka', 'Vodeća internacionalna kompanija u proizvodnji podnih obloga.');

-- SEKTOR --
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(1, 'Uprava', 'UPR', 1);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(2, 'Finansije', 'FIN', 1);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(3, 'Inovacije i razvoj', 'IIR', 1);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(4, 'Održavanje', 'ODR', 1);

INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(5, 'Uprava', 'UPR', 2);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(6, 'Finansije', 'FIN', 2);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(7, 'Inovacije i razvoj', 'IIR', 2);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(8, 'Održavanje', 'ODR', 2);

INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(9, 'Uprava', 'UPR', 3);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(10, 'Finansije', 'FIN', 3);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(11, 'Inovacije i razvoj', 'IIR', 3);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(12, 'Održavanje', 'ODR', 3);

INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(13, 'Uprava', 'UPR', 4);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(14, 'Finansije', 'FIN', 4);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(15, 'Inovacije i razvoj', 'IIR', 4);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(16, 'Održavanje', 'ODR', 4);

INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(17, 'Uprava', 'UPR', 5);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(18, 'Finansije', 'FIN', 5);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(19, 'Inovacije i razvoj', 'IIR', 5);
INSERT INTO sektor(id, naziv, oznaka, preduzece)
	VALUES(20, 'Održavanje', 'ODR', 5);


-- RADNIK --
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(1, 'Milan', 'Adamović', 486959499, 5, 1);    
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(2, 'Vlada', 'Brajović', 754887395, 6, 5);  
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(3, 'Ana', 'Mitrović', 113424356, 5, 9);   
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(4, 'Radomir', 'Nikolić', 337654487, 6, 13);   
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(5, 'Jovan', 'Pavlović', 228796657, 5, 17);   

INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(6, 'Sanja', 'Popović', 107748339, 4, 2);   
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(7, 'Željko', 'Tešić', 299816654, 3, 6);   
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(8, 'Vesna', 'Todorović', 322877331, 4, 10);   
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(9, 'Petar', 'Milić', 118472248, 3, 14); 
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(10, 'Ivana', 'Spasić', 100307448, 4, 18); 

INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(11, 'Nikola', 'Sanardžić', 338336445, 3, 3); 
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(12, 'Mario', 'Raden', 80173662841, 5, 7); 
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(13, 'Ilija', 'Perić', 1773666284, 3, 11); 
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(14, 'Dario', 'Nedić', 413373883, 5, 15); 
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(15, 'Stevan', 'Dabić', 1199300432, 3, 19); 

INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(16, 'Milan', 'Tepić', 211827736, 1, 4); 
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(17, 'Žarko', 'Marić', 433190003, 2, 8); 
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(18, 'Nenad', 'Jovanović', 188883726, 1, 12); 
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(19, 'Ognjen', 'Elić', 122374663, 2, 16); 
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor)
	VALUES(20, 'Bojan', 'Topić', 288499372, 1, 20); 
