var Db = require('./dboperations');
var FHS = require('./fhs');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors());

app.use('/api', router);

router.route('/data').get((request, response) => {
    dboperations.getAllData().then(result => {
        response.json(result[0]);
    })
})

router.route('/regions').get((request, response) => {
    dboperations.getAllRegions().then(result => {
        response.json(result[0]);
    })
})

router.route('/users').get((request, response) => {
    dboperations.getAllUsers().then(result => {
        response.json(result[0]);
    })
})

router.route('/createUser').post((request, response) => {
    let record = {...request.body }
    dboperations.createUser(record).then(result => {
        console.log(result)
        return response.status(201).json(result);
    })
})

router.route('/deleteUser').post((request, response) => {
    let record = {...request.body }
    dboperations.deleteUser(record).then(result => {
        console.log(result)
        return response.status(201).json(result[0]);
    })
})

router.route('/updateUser').post((request, response) => {
    let record = {...request.body }
    dboperations.updateUser(record).then(result => {
        console.log(result)
        return response.status(201).json(result[0]);
    })
})

router.use((request, response, next) => {
    console.log('middleware');
    next();
})

router.route('/emr').post((request, response) => {
    dboperations.getDataByEMR(request.body).then(result => {
        return response.json(result[0]);
    })
})

router.route('/region').post((request, response) => {
    dboperations.getRegionData(request.body.Region).then(result => {
        return response.json(result[0]);
    })
})

router.route('/state').post((request, response) => {
    dboperations.getStateData(request.body.selectedRegion, request.body.state).then(result => {
        return response.json(result[0]);
    })
})

router.route('/hospital').post((request, response) => {
    dboperations.getHospitalData(request.body.selectedRegion, request.body.state, request.body.hospitalName).then(result => {
        return response.json(result[0]);
    })
})

router.route('/department').post((request, response) => {
    dboperations.getDepartmentData(request.body.selectedRegion, request.body.state, request.body.hospital, request.body.department).then(result => {
        return response.json(result[0]);
    })
})

router.route('/update').put((request, response) => {
    dboperations.updateData(request.body.record, request.body.selectedRegion, request.body.selectedHospital, request.body.selectedDept).then(result => {
        return response.json(result[0]);
    })
})

router.route('/ACH').get((request, response) => {
    dboperations.getACH().then(result => {
        response.json(result[0]);
    })
})

router.route('/SLEH').get((request, response) => {
    dboperations.getSLEH().then(result => {
        response.json(result[0]);
    })
})

router.route('/fhs/:id').get((request, response) => {

    dboperations.getFHS(request.params.id).then(result => {
        response.json(result[0]);
    })

})

router.route('/create').post((request, response) => {
    let record = {...request.body }
    dboperations.createRecord(record).then(result => {
        console.log(result)
        response.status(201).json(result);
    })
})

router.route('/delete').delete((request, response) => {
    let record = {...request.body }
    dboperations.deleteRecord(record).then(result => {
        response.status(201).json(result);
    })
})

router.route('/login').post((request, response) => {
    let body = {...request.body }
    dboperations.login(body).then(result => {
        console.log(result)
        if (result === "User Not Found") {
            return response.status(404).json(result);
        } else {
            return response.status(201).json(result);
        }
    })
})

router.route('/logout').post((request, response) => {
    dboperations.logout(request.body.idx, request.body.uid, request.body.loginDtTm, request.body.logoutDtTm).then(result => {
        return response.json(result[0]);
    })
})

router.route('/loginInfo').post((request, response) => {
    dboperations.loginInfo(request.body.userID, request.body.LoginDateTime, request.body.LogoutDateTime).then(result => {
        return response.json(result[0]);
    })
})

var port = process.env.PORT || 8085;
app.listen(port);
console.log('Inventory API is runnning at ' + port);