CREATE TABLE member (
  memberId INTEGER,
  familyId INTEGER,
  nameFirst VARCHAR(25),
  nameLast VARCHAR(25),
  email VARCHAR(30),
  birthYear INTEGER,
  birthMonth INTEGER,
  birthDay INTEGER,
  phoneCell VARCHAR(25)
);

CREATE TABLE address (
  addressId INTEGER,
  familyId INTEGER,
  streetOne VARCHAR(100),
  streetTwo VARCHAR(30),
  city VARCHAR(30),
  state VARCHAR(10),
  zip VARCHAR(10),
  country VARCHAR(10),
  phoneHome VARCHAR(25)
);
