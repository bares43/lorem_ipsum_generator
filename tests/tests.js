QUnit.test("Characters", function(assert){
    assert.notStrictEqual(lorem_ipsum_generator(),undefined);
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, length:8}),"Nam quis");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, length:8,remove:true}),"Namquisn");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, length:11,remove:true,removeChars:["a","u"]}),"Nm qis nll.");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, length:10,addChars:[{
        char : "hello",
        positions : [0]
    }]}),"helloNam q");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, length:15,addChars:[{
        char : "hello",
        positions : [0,10]
    }]}),"helloNam qhello");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, length:15,remove:true,removeChars:["a","u"],addChars:[{
        char : "hello",
        positions : [0,10]
    }]}),"helloNm qihello");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false}),lorem_ipsum_generator({shuffle:false,type:lorem_ipsum_generator.TYPE_CHARACTERS}))
});

QUnit.test("Sentences", function(assert){
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_SENTENCES,length:2}),"Nam quis nulla. Integer malesuada.");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_SENTENCES,length:2,remove:true}),"NamquisnullaIntegermalesuada");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_SENTENCES,length:2,remove:true,removeChars:["a"]}),"Nm quis null. Integer mlesud.");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_SENTENCES,length:2,addChars:[{
        char : "a",
        positions : [0]
    }]}),"aNam quis nulla. Integer malesuada.");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_SENTENCES,length:2,remove:true,removeChars:["a"],addChars:[{
        char : "a",
        positions : [0]
    }]}),"aNm quis null. Integer mlesud.");
});

QUnit.test("Words", function(assert){
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_WORDS,length:2}),"Nam quis");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_WORDS,length:2,remove:true}),"Namquis");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_WORDS,length:2,remove:true,removeChars:["a"]}),"Nm quis");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_WORDS,length:2,addChars:[{
        char : "a",
        positions : [0]
    }]}),"aNam quis");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_WORDS,length:2,remove:true,removeChars:["a"],addChars:[{
        char : "a",
        positions : [0]
    }]}),"aNm quis");
});

QUnit.test("Paragraphs", function(assert){
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_PARAGRAPHS}),"Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus. Integer pellentesque quam vel velit. Duis pulvinar.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo. Vestibulum facilisis auctor urna. Aliquam in lorem_paragraphs sit amet leo accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus et lorem_paragraphs id felis nonummy placerat. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque libero. Maecenas libero. Etiam dictum tincidunt diam. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Suspendisse nisl. Sed convallis magna eu sem. Cras pede libero, dapibus nec, pretium sit amet, tempor quis, urna.");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_PARAGRAPHS,length:1}),"Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat.");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_PARAGRAPHS,length:1,addChars:[{
        char : "a",
        positions : [5]
    }]}),"Nam qauis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat.");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_PARAGRAPHS,wrapHTML:true}),"<p>Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus. Integer pellentesque quam vel velit. Duis pulvinar.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo. Vestibulum facilisis auctor urna. Aliquam in lorem_paragraphs sit amet leo accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus et lorem_paragraphs id felis nonummy placerat. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque libero. Maecenas libero. Etiam dictum tincidunt diam. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Suspendisse nisl. Sed convallis magna eu sem. Cras pede libero, dapibus nec, pretium sit amet, tempor quis, urna.</p>");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_PARAGRAPHS,wrapHTML:true,remove:true}),"<p>NamquisnullaIntegermalesuadaIninenimaarcuimperdietmalesuadaSedvellectusDonecodiournatempusmolestieporttitorutiaculisquissemPhasellusrhoncusAeneanidmetusidvelitullamcorperpulvinarVestibulumfermentumtortoridmiPellentesqueipsumNullanonarculacinianequefaucibusfringillaNullanonlectussednislmolestiemalesuadaProinintellussitametnibhdignissimsagittisVivamusluctusegestasleoMaecenassollicitudinNullamrhoncusaliquammetusEtiamegestaswisiaerat</p><p>LoremipsumdolorsitametconsectetueradipiscingelitNullamfeugiatturpisatpulvinarvulputateeratliberotristiquetellusnecbibendumodiorisussitametanteAliquameratvolutpatNuncauctorMaurispretiumquameturnaFuscenibhDuisrisusCurabitursagittishendreritanteAliquameratvolutpatVestibulumeratnullaullamcorpernecrutrumnonnonummyaceratDuiscondimentumaugueidmagnasemperrutrumNullamjustoenimconsectetuernecullamcorperacvestibuluminelitProinpedemetusvulputatenecfermentumfringillavehiculavitaejustoFusceconsectetuerrisusanuncAliquamornarewisieumetusIntegerpellentesquequamvelvelitDuispulvinar</p><p>LoremipsumdolorsitametconsectetueradipiscingelitMorbigravidaliberonecvelitMorbiscelerisqueluctusvelitEtiamduisemfermentumvitaesagittisidmalesuadainquamProinmattislaciniajustoVestibulumfacilisisauctorurnaAliquaminlorem_paragraphssitametleoaccumsanlaciniaIntegerrutrumorcivestibulumullamcorperultricieslacusquamultriciesodiovitaeplaceratpedesemsitametenimPhasellusetlorem_paragraphsidfelisnonummyplaceratFusceduileoimperdietinaliquamsitametfeugiateuorciAeneanvelmassaquismaurisvehiculalaciniaQuisquetinciduntscelerisqueliberoMaecenasliberoEtiamdictumtinciduntdiamDonecipsummassaullamcorperinauctoretscelerisquesedestSuspendissenislSedconvallismagnaeusemCraspedeliberodapibusnecpretiumsitamettemporquisurna</p>");
    assert.strictEqual(lorem_ipsum_generator({shuffle:false, type:lorem_ipsum_generator.TYPE_PARAGRAPHS,wrapHTML:true,remove:true,removeChars:["a"]}),"<p>Nm quis null. Integer mlesud. In in enim  rcu imperdiet mlesud. Sed vel lectus. Donec odio urn, tempus molestie, porttitor ut, iculis quis, sem. Phsellus rhoncus. Aenen id metus id velit ullmcorper pulvinr. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Null non rcu lcini neque fucibus fringill. Null non lectus sed nisl molestie mlesud. Proin in tellus sit met nibh dignissim sgittis. Vivmus luctus egests leo. Mecens sollicitudin. Nullm rhoncus liqum metus. Etim egests wisi  ert.</p><p>Lorem ipsum dolor sit met, consectetuer dipiscing elit. Nullm feugit, turpis t pulvinr vulputte, ert libero tristique tellus, nec bibendum odio risus sit met nte. Aliqum ert volutpt. Nunc uctor. Muris pretium qum et urn. Fusce nibh. Duis risus. Curbitur sgittis hendrerit nte. Aliqum ert volutpt. Vestibulum ert null, ullmcorper nec, rutrum non, nonummy c, ert. Duis condimentum ugue id mgn semper rutrum. Nullm justo enim, consectetuer nec, ullmcorper c, vestibulum in, elit. Proin pede metus, vulputte nec, fermentum fringill, vehicul vite, justo. Fusce consectetuer risus  nunc. Aliqum ornre wisi eu metus. Integer pellentesque qum vel velit. Duis pulvinr.</p><p>Lorem ipsum dolor sit met, consectetuer dipiscing elit. Morbi grvid libero nec velit. Morbi scelerisque luctus velit. Etim dui sem, fermentum vite, sgittis id, mlesud in, qum. Proin mttis lcini justo. Vestibulum fcilisis uctor urn. Aliqum in lorem_prgrphs sit met leo ccumsn lcini. Integer rutrum, orci vestibulum ullmcorper ultricies, lcus qum ultricies odio, vite plcert pede sem sit met enim. Phsellus et lorem_prgrphs id felis nonummy plcert. Fusce dui leo, imperdiet in, liqum sit met, feugit eu, orci. Aenen vel mss quis muris vehicul lcini. Quisque tincidunt scelerisque libero. Mecens libero. Etim dictum tincidunt dim. Donec ipsum mss, ullmcorper in, uctor et, scelerisque sed, est. Suspendisse nisl. Sed convllis mgn eu sem. Crs pede libero, dpibus nec, pretium sit met, tempor quis, urn.</p>");
});