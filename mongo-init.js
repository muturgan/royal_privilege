// Никогда не храните конфиги в репозитории!

print('Start creating database ##########################')

db = db.getSiblingDB('prod');
db.createUser(
    {
        user: 'prod_user',
        pwd:  'prod_pass',
        roles: [{role: 'readWrite', db: 'prod'}],
    }
);

db = db.getSiblingDB('dev');
db.createUser(
    {
        user: 'dev_user',
        pwd:  'dev_pass',
        roles: [{role: 'readWrite', db: 'dev'}],
    }
);

db = db.getSiblingDB('test');
db.createUser(
    {
        user: 'test_user',
        pwd:  'test_pass',
        roles: [{role: 'readWrite', db: 'test'}],
    }
);

print('End creating database ##########################')