import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LyCommonModule, LyThemeModule} from '@alyle/ui';
import {LyTypographyModule} from '@alyle/ui/typography';
/* COMPONENT MODULES */
import {LyBadgeModule} from '@alyle/ui/badge';
import {LyButtonModule} from '@alyle/ui/button';
import {LyCardModule} from '@alyle/ui/card';
import {LyCarouselModule} from '@alyle/ui/carousel';
import {LyCheckboxModule} from '@alyle/ui/checkbox';
import {LyDialogModule} from '@alyle/ui/dialog';
import {LyDividerModule} from '@alyle/ui/divider';
import {LyDrawerModule} from '@alyle/ui/drawer';
import {LyExpansionModule} from '@alyle/ui/expansion';
import {LyFieldModule} from '@alyle/ui/field';
import {LyGridModule} from '@alyle/ui/grid';
import {LyIconModule} from '@alyle/ui/icon';
import {LyListModule} from '@alyle/ui/list';
import {LyMenuModule} from '@alyle/ui/menu';
import {LyRadioModule} from '@alyle/ui/radio';
import {LySelectModule} from '@alyle/ui/select';
import {LySkeletonModule} from '@alyle/ui/skeleton';
import {LySliderModule} from '@alyle/ui/slider';
import {LySnackBarModule} from '@alyle/ui/snack-bar';
import {LyTabsModule} from '@alyle/ui/tabs';
import {LyToolbarModule} from '@alyle/ui/toolbar';
import {LyTooltipModule} from '@alyle/ui/tooltip';


const MODULES = [
    CommonModule,
    LyCommonModule,
    LyThemeModule,
    LyTypographyModule,
    /* COMPONENT MODULES */
    LyBadgeModule,
    LyButtonModule,
    LyCardModule,
    LyCarouselModule,
    LyCheckboxModule,
    LyDialogModule,
    LyDividerModule,
    LyDrawerModule,
    LyExpansionModule,
    LyFieldModule,
    LyGridModule,
    LyIconModule,
    LyListModule,
    LyMenuModule,
    LyRadioModule,
    LySelectModule,
    LySkeletonModule,
    LySliderModule,
    LySnackBarModule,
    LyTabsModule,
    LyToolbarModule,
    LyTooltipModule,
];

@NgModule({
    imports: [
        ...MODULES
    ],
    exports: [
        ...MODULES
    ]
})
export class ComponentsModule {}
