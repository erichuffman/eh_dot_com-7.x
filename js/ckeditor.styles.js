/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button in CKEditor.
 *
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
    [
            
            /* Inline floating */
            
            {
                    name : 'Inline Left',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float left'
                    }
            },
            
            {
                    name : 'Inline Right',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float right'
                    }
            },
            
            {
                    name : 'Inline Left - 25%',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float left-25'
                    }
            },
            
            {
                    name : 'Inline Right - 25%',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float right-25'
                    }
            },
            
            {
                    name : 'Inline Left - 33%',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float left-33'
                    }
            },
            
            {
                    name : 'Inline Right - 33%',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float right-33'
                    }
            },
            
            {
                    name : 'Inline Left - 50%',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float left-50'
                    }
            },
            
            {
                    name : 'Inline Right - 50%',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float right-50'
                    }
            },
            
            {
                    name : 'Inline Left - 66%',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float left-66'
                    }
            },
            
            {
                    name : 'Inline Right - 66%',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float right-66'
                    }
            },
            
            {
                    name : 'Inline Left - 75%',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float left-75'
                    }
            },
            
            {
                    name : 'Inline Right - 75%',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float right-75'
                    }
            },
            
            {
                    name : 'Clear Inlines - Left',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float clear-left'
                    }
            },
            
            {
                    name : 'Clear Inlines - Right',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float clear-right'
                    }
            },
            
            {
                    name : 'Clear Inlines - All',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'style-inline__float clear-both'
                    }
            }
            
    ]);
}