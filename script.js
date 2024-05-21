document.addEventListener("DOMContentLoaded", function() {
    // Пример данных, которые можно загрузить через API
    const productData = {
        brand: "MARSHALL",
        sku: "M8010010",
        productType: "Аналог",
        status: "Активный ассортимент",
        group: "Амортизаторы подвески (легковые)",
        manualName: "Амортизатор газ. задн. Daewoo Espero 90- / Lanos 97- / Nexia 95-; Opel Astra F 91- / Vectra A 88- (M8010010)",
        ean13: "8720171400257",
        description: "При проектировании легковых амортизаторов MARSHALL учитывался опыт разработки деталей для коммерческой техники, где крайне высоки требования к качеству запчастей, а пробеги исчисляются сотнями тысяч километров в год. Это позволило применить надежные конструкторские решения, проверенные тяжелой техникой и обеспечить долговечность работы амортизатора.",
        weight: 1.7,
        hasBox: "Да",
        length: 0.5,
        width: 0.06,
        height: 0.06,
        packagingQty: 10,
        completeness: "1 амортизатор подвески",
        applicabilityLcv: "нет",
        applicabilityChina: "нет",
        installationSide: "левая/правая",
        installationAxis: "задняя",
        sidePair: "нет",
        multiplicity: 2,
        type: "Двухтрубный газонаполненный",
        mountingType: "Верх - шпилька, низ - сайлентблок",
        lmin: 339,
        lmax: 562,
        dustDiameter: "-",
        bodyDiameter: 38.5,
        rodDiameter: 12.5,
        mainSupplier: "АДД",
        supplierSku: "CGN20114",
        supplierPackagingQty: 10
    };

    // Заполнение страницы данными
    document.getElementById("brand").textContent = productData.brand;
    document.getElementById("sku").textContent = productData.sku;
    document.getElementById("product-type").textContent = productData.productType;
    document.getElementById("status").textContent = productData.status;
    document.getElementById("group").textContent = productData.group;
    document.getElementById("manual-name").textContent = productData.manualName;
    document.getElementById("ean13").textContent = productData.ean13;
    document.getElementById("description").textContent = productData.description;
    document.getElementById("weight").textContent = productData.weight;
    document.getElementById("has-box").textContent = productData.hasBox;
    document.getElementById("length").textContent = productData.length;
    document.getElementById("width").textContent = productData.width;
    document.getElementById("height").textContent = productData.height;
    document.getElementById("packaging-qty").textContent = productData.packagingQty;
    document.getElementById("completeness").textContent = productData.completeness;
    document.getElementById("applicability-lcv").textContent = productData.applicabilityLcv;
    document.getElementById("applicability-china").textContent = productData.applicabilityChina;
    document.getElementById("installation-side").textContent = productData.installationSide;
    document.getElementById("installation-axis").textContent = productData.installationAxis;
    document.getElementById("side-pair").textContent = productData.sidePair;
    document.getElementById("multiplicity").textContent = productData.multiplicity;
    document.getElementById("type").textContent = productData.type;
    document.getElementById("mounting-type").textContent = productData.mountingType;
    document.getElementById("lmin").textContent = productData.lmin;
    document.getElementById("lmax").textContent = productData.lmax;
    document.getElementById("dust-diameter").textContent = productData.dustDiameter;
    document.getElementById("body-diameter").textContent = productData.bodyDiameter;
    document.getElementById("rod-diameter").textContent = productData.rodDiameter;
    document.getElementById("main-supplier").textContent = productData.mainSupplier;
    document.getElementById("supplier-sku").textContent = productData.supplierSku;
    document.getElementById("supplier-packaging-qty").textContent = productData.supplierPackagingQty;
});
