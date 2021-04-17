const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../public/Members')

// ALL MEMBERS
router.get('/', (req, res) => res.json(members));

// RETRIEVE BY ID
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
}else{
        res.status(400).json({ msg : `not found any member with id : ${req.params.id}`});
    }
});

//app.use(logger);

// POST METHOD
router.post('/', (req, res) => {
    // res.send(req.body);
    const newMember = {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email,
        status : 'active'
    }

    if (!newMember.name || !newMember.email){
        return res.status(400).json({msg : "please enter full details."})
    }

    members.push(newMember);
    res.json(members);
});

//update method

router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if (found) {
        const updMember = req.body;
        members.forEach(member =>{
            if (member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({msg : 'Member Updated...' , member});
            }
        })
}else{
        res.status(400).json({ msg : `not found any member with id : ${req.params.id}`});
    }
});

//Delete Method

router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json({msg : 'Member Deleted', members: members.filter(member => member.id !== parseInt(req.params.id))});
}else{
        res.status(400).json({ msg : `not found any member with id : ${req.params.id}`});
    }
});



module.exports = router;