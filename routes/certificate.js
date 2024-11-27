const router = require("express").Router();
const Certificate = require("../models/Certificate");
const CSS = require("../models/CssModul");
const JS = require("../models/JsModul");
const REACT = require("../models/ReactModul");
const NODE = require("../models/NodeModul");
const ENG = require("../models/EngModul");
const RUS = require("../models/RusModul");
const Foundation = require("../models/Foundation");


router.post("/", async (req, res) => {
  console.log(req.body)
  if (req.body.courseName === "rus") {
    const existCertificate = await RUS.find({ name: req.body.name, surname: req.body.surname })
    const allCertificates = await RUS.find();

    function generateId(allCertificates) {
      if (allCertificates.length < 10) {
        return "RUS000" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 99) {
        return "RUS00" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 999) {
        return "RUS0" + (allCertificates.length + 1)
      }
      else {
        return "RUS" + (allCertificates.length + 1)
      }
    }

    try {
      if (existCertificate.length <= 0) {
        const newCertificate = await RUS.create({
          id: generateId(allCertificates),
          name: req.body.name,
          surname: req.body.surname,
          teachername: req.body.teachername,
          courseName: req.body.courseName,
          givenDate: req.body.givenDate,
          catigory: req.body.catigory
        });
        const certificate = await newCertificate.save();
        res.status(200).json(certificate);
      }
      else {
        res.json("Sertifikat allaqachon mavjud");
      }
    } catch (err) {
      res.status(400).json("Sertifikat yaratishda xatolik!");
    }
  }
  else if (req.body.courseName === "eng" || req.body.courseName === "level") {
    const existCertificate = await ENG.find({ name: req.body.name, surname: req.body.surname })
    const allCertificates = await ENG.find();

    function generateId(allCertificates) {
      if
        (allCertificates.length < 10) {
        return "RUS000" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 99) {
        return "RUS00" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 999) {
        return "RUS0" + (allCertificates.length + 1)
      }
      else {
        return "ENG" + (allCertificates.length + 1)
      }
    }
    try {
      if (existCertificate.length <= 0) {
        const newCertificate = await ENG.create({
          id: generateId(allCertificates),
          name: req.body.name,
          surname: req.body.surname,
          teachername: req.body.teachername,
          courseName: req.body.courseName,
          givenDate: req.body.givenDate,
          level: req.body.level
        });
        const certificate = await newCertificate.save();
        res.status(200).send(certificate);
      }
      else {
        res.json("Sertifikat allaqachon mavjud");
      }
    } catch (err) {
      res.status(400).json("Sertifikat yaratishda xatolik!");
    }
  }
  else if (req.body.courseName === "css") {
    const existCertificate = await CSS.find({ name: req.body.name, surname: req.body.surname })
    const allCertificates = await CSS.find();

    function generateId(allCertificates) {
      if (allCertificates.length < 10) {
        return "CSS000" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 99) {
        return "CSS00" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 999) {
        return "CSS0" + (allCertificates.length + 1)
      }
      else {
        return "CSS" + (allCertificates.length + 1)
      }
    }

    try {
      if (existCertificate.length <= 0) {
        const newCertificate = await CSS.create({
          id: generateId(allCertificates),
          name: req.body.name,
          surname: req.body.surname,
          courseName: req.body.courseName,
          teachername: req.body.teachername,
          givenDate: req.body.givenDate,
        });
        const certificate = await newCertificate.save();
        res.status(200).json(certificate);
      }
      else {
        res.json("Sertifikat allaqachon mavjud");
      }
    } catch (err) {
      res.status(400).json("Sertifikat yaratishda xatolik!");
    }
  }
  else if (req.body.courseName === "foundation") {
    const existCertificate = await Foundation.find({ name: req.body.name, surname: req.body.surname })
    const allCertificates = await Foundation.find();

    function generateId(allCertificates) {
      if (allCertificates.length < 10) {
        return "FOUNDATION000" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 99) {
        return "FOUNDATION00" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 999) {
        return "FOUNDATION0" + (allCertificates.length + 1)
      }
      else {
        return "FOUNDATION" + (allCertificates.length + 1)
      }
    }

    try {
      if (existCertificate.length <= 0) {
        const newCertificate = await Foundation.create({
          id: generateId(allCertificates),
          name: req.body.name,
          surname: req.body.surname,
          courseName: req.body.courseName,
          teachername: req.body.teachername,
          givenDate: req.body.givenDate,
        });
        const certificate = await newCertificate.save();
        res.status(200).json(certificate);
      }
      else {
        res.json("Sertifikat allaqachon mavjud");
      }
    } catch (err) {
      res.status(400).json("Sertifikat yaratishda xatolik!");
    }
  }
  else if (req.body.courseName === "javascript") {
    const existCertificate = await JS.find({ name: req.body.name, surname: req.body.surname })
    const allCertificates = await JS.find();
    console.log("js: ", req.body)
    function generateId(allCertificates) {
      if (allCertificates.length < 10) {
        return "JS000" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 99) {
        return "JS00" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 999) {
        return "JS0" + (allCertificates.length + 1)
      }
      else {
        return "JS" + (allCertificates.length + 1)
      }
    }

    try {
      if (existCertificate.length <= 0) {
        const newCertificate = await JS.create({
          id: generateId(allCertificates),
          name: req.body.name,
          surname: req.body.surname,
          courseName: req.body.courseName,
          teachername: req.body.teachername,
          givenDate: req.body.givenDate,
        });
        const certificate = await newCertificate.save();
        res.status(200).json(certificate);
      }
      else {
        res.json("Sertifikat allaqachon mavjud");
      }
    } catch (err) {
      res.status(400).json("Sertifikat yaratishda xatolik!");
    }
  }
  else if (req.body.courseName === "react") {
    const existCertificate = await REACT.find({ name: req.body.name, surname: req.body.surname })
    const allCertificates = await REACT.find();

    function generateId(allCertificates) {
      if (allCertificates.length < 10) {
        return "REACT000" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 99) {
        return "REACT00" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 999) {
        return "REACT0" + (allCertificates.length + 1)
      }
      else {
        return "REACT" + (allCertificates.length + 1)
      }
    }

    try {
      if (existCertificate.length <= 0) {
        const newCertificate = await REACT.create({
          id: generateId(allCertificates),
          name: req.body.name,
          surname: req.body.surname,
          courseName: req.body.courseName,
          teachername: req.body.teachername,
          givenDate: req.body.givenDate,
        });
        const certificate = await newCertificate.save();
        res.status(200).json(certificate);
      }
      else {
        res.json("Sertifikat allaqachon mavjud");
      }
    } catch (err) {
      res.status(400).json("Sertifikat yaratishda xatolik!");
    }
  }
  else if (req.body.courseName === "nodejs") {
    const existCertificate = await NODE.find({ name: req.body.name, surname: req.body.surname })
    const allCertificates = await NODE.find();

    function generateId(allCertificates) {
      if (allCertificates.length < 10) {
        return "NODE000" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 99) {
        return "NODE00" + (allCertificates.length + 1)
      }
      else if (allCertificates.length <= 999) {
        return "NODE0" + (allCertificates.length + 1)
      }
      else {
        return "NODE" + (allCertificates.length + 1)
      }
    }

    try {
      if (existCertificate.length <= 0) {
        const newCertificate = await NODE.create({
          id: generateId(allCertificates),
          name: req.body.name,
          surname: req.body.surname,
          courseName: req.body.courseName,
          teachername: req.body.teachername,
          givenDate: req.body.givenDate,
        });
        const certificate = await newCertificate.save();
        res.status(200).json(certificate);
      }
      else {
        res.json("Sertifikat allaqachon mavjud");
      }
    } catch (err) {
      res.status(400).json("Sertifikat yaratishda xatolik!");
    }
  }
  else {
    res.status(400).json("Sertificate categoriyasi xato!");
  }
});
router.post("/checkaddindex/:id", async (req, res) => {
  try {
    let params = (req.params.id).toUpperCase();
    let CertificateId;
    if (params.includes("CSS")) {
      const allCertificates = await CSS.find();

      function generateId(allCSSCertificates) {
        if (allCSSCertificates.length < 10) {
          return "CSS000" + (allCSSCertificates.length + 1)
        }
        else if (allCSSCertificates.length <= 99) {
          return "CSS00" + (allCSSCertificates.length + 1)
        }
        else if (allCSSCertificates.length <= 999) {
          return "CSS0" + (allCSSCertificates.length + 1)
        }
        else {
          return "CSS" + (allCSSCertificates.length + 1)
        }
      }
      CertificateId = generateId(allCertificates)
    } else if (params.includes("FOUNDATION")) {
      const allCertificates = await Foundation.find();
      console.log(allCertificates);

      function generateId(allCSSCertificates) {
        if (allCSSCertificates.length < 10) {
          return "FOUNDATION000" + (allCSSCertificates.length + 1)
        }
        else if (allCSSCertificates.length <= 99) {
          return "FOUNDATION00" + (allCSSCertificates.length + 1)
        }
        else if (allCSSCertificates.length <= 999) {
          return "FOUNDATION0" + (allCSSCertificates.length + 1)
        }
        else {
          return "FOUNDATION" + (allCSSCertificates.length + 1)
        }
      }
      CertificateId = generateId(allCertificates)
    } else if (params.includes("JS")) {
      // validCertificate = await JS.findOne({ id: params });
      const allCertificates = await JS.find({});

      function generateId(allJSCertificates) {
        if (allJSCertificates.length < 10) {
          return "JS000" + (allJSCertificates.length + 1)
        }
        else if (allJSCertificates.length <= 99) {
          return "JS00" + (allJSCertificates.length + 1)
        }
        else if (allJSCertificates.length <= 999) {
          return "JS0" + (allJSCertificates.length + 1)
        }
        else {
          return "JS" + (allJSCertificates.length + 1)
        }
      }
      CertificateId = generateId(allCertificates)
    } else if (params.includes("REACT")) {
      const allCertificates = await REACT.find({});

      function generateId(allREACTCertificates) {
        if (allREACTCertificates.length < 10) {
          return "REACT000" + (allREACTCertificates.length + 1)
        }
        else if (allREACTCertificates.length <= 99) {
          return "REACT00" + (allREACTCertificates.length + 1)
        }
        else if (allREACTCertificates.length <= 999) {
          return "REACT0" + (allREACTCertificates.length + 1)
        }
        else {
          return "REACT" + (allREACTCertificates.length + 1)
        }
      }
      CertificateId = generateId(allCertificates)
    } else if (params.includes("NODE")) {
      // validCertificate = await NODE.findOne({ id: params });

      const allCertificates = await NODE.find({});
      function generateId(allNODECertificates) {
        if (allNODECertificates.length < 10) {
          return "NODE000" + (allNODECertificates.length + 1)
        }
        else if (allNODECertificates.length <= 99) {
          return "NODE00" + (allNODECertificates.length + 1)
        }
        else if (allNODECertificates.length <= 999) {
          return "NODE0" + (allNODECertificates.length + 1)
        }
        else {
          return "NODE" + (allNODECertificates.length + 1)
        }
      }
      CertificateId = generateId(allCertificates)
    } else if (params.includes("ENG")) {
      // validCertificate = await ENG.findOne({ id: params });
      const allCertificates = await ENG.find({});
      function generateId(allENGCertificates) {
        if (allENGCertificates.length < 10) {
          return "ENG000" + (allENGCertificates.length + 1)
        }
        else if (allENGCertificates.length <= 99) {
          return "ENG00" + (allENGCertificates.length + 1)
        }
        else if (allENGCertificates.length <= 999) {
          return "ENG0" + (allENGCertificates.length + 1)
        }
        else {
          return "ENG" + (allENGCertificates.length + 1)
        }
      }
      CertificateId = generateId(allCertificates)
    } else if (params.includes("RUS")) {
      // validCertificate = await RUS.findOne({ id: params });
      const allCertificates = await RUS.find({});
      function generateId(allRUSCertificates) {
        if (allRUSCertificates.length < 10) {
          return "RUS000" + (allRUSCertificates.length + 1)
        }
        else if (allRUSCertificates.length <= 99) {
          return "RUS00" + (allRUSCertificates.length + 1)
        }
        else if (allRUSCertificates.length <= 999) {
          return "RUS0" + (allRUSCertificates.length + 1)
        }
        else {
          return "RUS" + (allRUSCertificates.length + 1)
        }
      }
      CertificateId = generateId(allCertificates)
    }
    if (CertificateId) {
      res.status(200).json(CertificateId);
    } else {
      res.status(404).json("Sertifikat topilmadi");
    }
  } catch (err) {
    res.status(500).json("Server error");
  }
});

router.post("/check/:id", async (req, res) => {
  try {
    let params = (req.params.id).toUpperCase();
    console.log(params);
    let validCertificate;
    if (params.includes("CSS")) {
      validCertificate = await CSS.findOne({ id: params });
    } else if (params.includes("JS")) {
      validCertificate = await JS.findOne({ id: params });
    } else if (params.includes("REACT")) {
      validCertificate = await REACT.findOne({ id: params });
    } else if (params.includes("NODE")) {
      validCertificate = await NODE.findOne({ id: params });
    } else if (params.includes("ENG")) {
      validCertificate = await ENG.findOne({ id: params });
    } else if (params.includes("RUS")) {
      validCertificate = await RUS.findOne({ id: params });
    }
    if (validCertificate) {
      res.status(200).json(validCertificate);
    } else {
      res.status(404).json("Sertifikat topilmadi");
    }
  } catch (err) {
    res.status(500).json("Server error");
  }
});

router.get("/all", async (req, res) => {
  try {
    let CSSCertificates = await CSS.find({});
    let JSCertificates = await JS.find({});
    let REACTCertificates = await REACT.find({});
    let NODECertificates = await NODE.find({});
    let ENGCertificates = await ENG.find({});
    let RUSCertificates = await RUS.find({});
    let allCertificates = [...RUSCertificates, ...ENGCertificates, ...CSSCertificates, ...JSCertificates, ...REACTCertificates, ...NODECertificates]
    // console.log(CSSCertificates)

    res.status(200).json(allCertificates);
  }
  catch (err) {
    res.send(404).json("Sertifikat topilmadi");
  }
});



router.get("/eng", async (req, res) => {
  try {
    let Certificates = await ENG.find({});

    res.status(200).json(Certificates);
  }
  catch (err) {
    res.send(404).json("Sertifikat topilmadi");
  }
});



router.get("/rus", async (req, res) => {
  try {
    let Certificates = await RUS.find({});

    res.status(200).json(Certificates);
  }
  catch (err) {
    res.send(404).json("Sertifikat topilmadi");
  }
});
router.get("/css", async (req, res) => {
  try {
    let Certificates = await CSS.find({});

    res.status(200).json(Certificates);
  }
  catch (err) {
    res.send(404).json("Sertifikat topilmadi");
  }
});
router.get("/javascript", async (req, res) => {
  try {
    let Certificates = await JS.find({});

    res.status(200).json(Certificates);
  }
  catch (err) {
    res.send(404).json("Sertifikat topilmadi");
  }
});
router.get("/foundation", async (req, res) => {
  try {
    let Certificates = await Foundation.find({});

    res.status(200).json(Certificates);
  }
  catch (err) {
    res.send(404).json("Sertifikat topilmadi");
  }
});

router.get("/react", async (req, res) => {
  try {
    let Certificates = await REACT.find({});

    res.status(200).json(Certificates);
  }
  catch (err) {
    res.send(404).json("Sertifikat topilmadi");
  }
});

router.get("/nodejs", async (req, res) => {
  try {
    let Certificates = await NODE.find({});

    res.status(200).json(Certificates);
  }
  catch (err) {
    res.send(404).json("Sertifikat topilmadi");
  }
});



router.patch("/delete/:id", async (req, res) => {
  try {
    let params = req.params.id
    let CSSCertificates = await CSS.find({});
    let JSCertificates = await JS.find({});
    let REACTCertificates = await REACT.find({});
    let NODECertificates = await NODE.find({});
    let ENGCertificates = await ENG.find({});
    let RUSCertificates = await RUS.find({});
    let FoundationCertificates = await Foundation.find({});
    let allCertificates = [...RUSCertificates, ...ENGCertificates, ...CSSCertificates, ...JSCertificates, ...REACTCertificates, ...NODECertificates, ...FoundationCertificates]
    const matchedUser = allCertificates.find(user => user._id == params)

    if (!matchedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (matchedUser.id.includes("CSS")) {
      const cssData = await CSS.findByIdAndUpdate(params, {
        $set: {
          name: "",
          surname: "",
          teachername: "",
          courseName: "",
          givenDate: ""
        }
      }, { new: true });
      res.status(200).json(cssData);
      return;
    } else if (matchedUser.id.includes("JS")) {
      const jsData = await JS.findByIdAndUpdate(params, {
        $set: {
          name: "",
          surname: "",
          teachername: "",
          courseName: "",
          givenDate: ""
        }
      }, { new: true });
      res.status(200).json(jsData);
      return;
    }
    else if (matchedUser.id.includes("FOUNDATION")) {
      const jsData = await Foundation.findByIdAndUpdate(params, {
        $set: {
          name: "",
          surname: "",
          teachername: "",
          courseName: "",
          givenDate: ""
        }
      }, { new: true });
      res.status(200).json(jsData);
      return;
    } else if (matchedUser.id.includes("REACT")) {
      const reactData = await REACT.findByIdAndUpdate(params, {
        $set: {
          name: "",
          surname: "",
          teachername: "",
          courseName: "",
          givenDate: ""
        }
      }, { new: true });
      res.status(200).json(reactData);
      return;
    } else if (matchedUser.id.includes("NODE")) {
      const nodeData = await NODE.findByIdAndUpdate(params, {
        $set: {
          name: "",
          surname: "",
          teachername: "",
          courseName: "",
          givenDate: ""
        }
      }, { new: true });

      res.status(200).json(nodeData);
      return;

    } else if (matchedUser.id.includes("ENG")) {
      const EngData = await ENG.findByIdAndUpdate(params, {
        $set: {
          name: "",
          surname: "",
          teachername: "",
          courseName: "",
          givenDate: ""
        }
      }, { new: true });
      res.status(200).json(EngData);
    } else if (matchedUser.id.includes("RUS")) {
      const rusData = await RUS.findByIdAndUpdate(params, {
        $set: {
          name: "",
          surname: "",
          teachername: "",
          courseName: "",
          givenDate: ""
        }
      }, { new: true });
      res.status(200).json(rusData);
    }
  } catch (err) {
    res.status(500).json("Server error");
  }
});

module.exports = router;
