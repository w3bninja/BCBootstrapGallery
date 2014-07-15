// Quick function to replace Business Catalyst's standard table based photo gallery layout with a nicer Bootstrap 3 version...
// Add .photogalleryTable{display:none;} to your CSS to hide the initial loaded table
// Module Required: {module_photogallery,GALLERYID}

jQuery(".photogalleryTable").each(function(index,elem){
    var gallery = jQuery(elem),
        bootstrapGallery = jQuery('<div class="gallery row"></div>');
 
    gallery.find(".photogalleryItem > a").each(function(index,elem){
        var galleryItem = jQuery(elem),
            image = galleryItem.find("img"),
            imageSrc = image.attr("src").split("?"),
            bootstrapGalleryItem = jQuery('<div class="col-sm-3 gallery-item" />');
 
        image.prop("src",imageSrc[0] + "?Action=thumbnail&Width=400&Height=200&algorithm=fill_proportional");
        image.addClass("thumbnail img-responsive");
 
        bootstrapGalleryItem.append(galleryItem);
        bootstrapGallery.append(bootstrapGalleryItem);
    });
 
    gallery.after(bootstrapGallery);
    gallery.remove();
});
