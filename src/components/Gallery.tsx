import avocado_lime from "../images/avocado_lime.jpg"
import bagels from "../images/bagels.jpg"
import beef_bone_in_chuck_roast from "../images/beef_bone_in_chuck_roast.jpg"
import beef_sirloin_tip_roast from "../images/beef_sirloin_tip_roast.jpg"
import bone_broth from "../images/bone_broth.jpg"
import boneless_ribs from "../images/boneless_ribs.jpg"
import bread_loaf from "../images/bread_loaf.jpg"
import buttermilk_pancakes from "../images/buttermilk_pancakes.jpg"
import cabbage_and_meatball from "../images/cabbage_and_meatball.jpg"
import carrot_cake from "../images/carrot_cake.jpg"
import cauliflower_shrimp from "../images/cauliflower_shrimp.jpg"
import cheese_burgers from "../images/cheese_burgers.jpg"
import cherry_pie from "../images/cherry_pie.jpg"
import chicken_garlic_aioli_tacos from "../images/chicken_garlic_aioli_tacos.jpg"
import chicken_nugs_and_french_fries from "../images/chicken_nugs_and_french_fries.jpg"
import chicken_pot_pie from "../images/chicken_pot_pie.jpg"
import chipotle from "../images/chipotle.jpg"
import chocolate_candy from "../images/chocolate_candy.jpg"
import chocolate_cookies from "../images/chocolate_cookies.jpg"
import chocolate_rice_krispies from "../images/chocolate_rice_krispies.jpg"
import chuletas_and_tostones from "../images/chuletas_and_tostones.jpg"
import dippy_eggs from "../images/dippy_eggs.jpg"
import dutch_oven_beff_stew from "../images/dutch_oven_beff_stew.jpg"
import english_muffins from "../images/english_muffins.jpg"
import fathers_day_special from "../images/fathers_day_special.jpg"
import flour_tortilla from "../images/flour_tortilla.jpg"
import french_toast from "../images/french_toast.jpg"
import grape_jelly from "../images/grape_jelly.jpg"
import kabobs from "../images/kabobs.jpg"
import lemon_chicken_mushroom from "../images/lemon_chicken_mushroom.jpg"
import lotion from "../images/lotion.jpg"
import mac_and_cheese_cicd from "../images/mac_and_cheese_cicd.jpg"
import mac_and_cheese_og from "../images/mac_and_cheese_og.jpg"
import mofongo from "../images/mofongo.jpg"
import paella from "../images/paella.jpg"
import peach_jelly from "../images/peach_jelly.jpg"
import peanut_butter_oats from "../images/peanut_butter_oats.jpg"
import pernil from "../images/pernil.jpg"
import pie_crust from "../images/pie_crust.jpg"
import pizza_crust from "../images/pizza_crust.jpg"
import platanos_garlic from "../images/platanos_garlic.jpg"
import pollo_guisado from "../images/pollo_guisado.jpg"
import rostiaire_chicken from "../images/rostiaire_chicken.jpg"
import salmon from "../images/salmon.jpg"
import sausage_subs from "../images/sausage_subs.jpg"
import shawns_chili from "../images/shawns_chili.jpg"
import shawns_lemonade from "../images/shawns_lemonade.jpg"
import shawns_tea from "../images/shawns_tea.jpg"
import shepherds_pie from "../images/shepherds_pie.jpg"
import shoulder_roast from "../images/shoulder_roast.jpg"
import spaghetti_and_meatballs from "../images/spaghetti_and_meatballs.jpg"
import spaghetti from "../images/spaghetti.jpg"
import spanish_rice from "../images/spanish_rice.jpg"
import steak_poatato from "../images/steak_poatato.jpg"
import stir_fry from "../images/stir_fry.jpg"
import stove_cleaner from "../images/stove_cleaner.jpg"
import strawberry_jam from "../images/strawberry_jam.jpg"
import stuffed_cabbage from "../images/stuffed_cabbage.jpg"
import stuffed_chicken from "../images/stuffed_chicken.jpg"
import sushi from "../images/sushi.jpg"
import sweet_potato_casserole from "../images/sweet_potato_casserole.jpg"
import thanksgiving_utensils from "../images/thanksgiving_utensils.jpg"
import tomato_sauce from "../images/tomato_sauce.jpg"
import top_round from "../images/top_round.jpg"
import tortilla_chips from "../images/tortilla_chips.jpg"
import waffles_pancakes from "../images/waffles_pancakes.jpg"
import zuchini_bread from "../images/zuchini_bread.jpg"

export type GalleryProps = {
  recipeType: string
  className?: string
}


export default function Gallery({ recipeType, className }: GalleryProps) {
  const recipes = [
    avocado_lime,
    bagels,
    beef_bone_in_chuck_roast,
    beef_sirloin_tip_roast,
    bone_broth,
    boneless_ribs,
    bread_loaf,
    buttermilk_pancakes,
    cabbage_and_meatball,
    carrot_cake,
    cauliflower_shrimp,
    cheese_burgers,
    cherry_pie,
    chicken_garlic_aioli_tacos,
    chicken_nugs_and_french_fries,
    chicken_pot_pie,
    chipotle,
    chocolate_candy,
    chocolate_cookies,
    chocolate_rice_krispies,
    chuletas_and_tostones,
    dippy_eggs,
    dutch_oven_beff_stew,
    english_muffins,
    fathers_day_special,
    flour_tortilla,
    french_toast,
    grape_jelly,
    kabobs,
    lemon_chicken_mushroom,
    lotion,
    mac_and_cheese_cicd,
    mac_and_cheese_og,
    mofongo,
    paella,
    peach_jelly,
    peanut_butter_oats,
    pernil,
    pie_crust,
    pizza_crust,
    platanos_garlic,
    pollo_guisado,
    rostiaire_chicken,
    salmon,
    sausage_subs,
    shawns_chili,
    shawns_lemonade,
    shawns_tea,
    shepherds_pie,
    shoulder_roast,
    spaghetti_and_meatballs,
    spaghetti,
    spanish_rice,
    steak_poatato,
    stir_fry,
    stove_cleaner,
    strawberry_jam,
    stuffed_cabbage,
    stuffed_chicken,
    sushi,
    sweet_potato_casserole,
    thanksgiving_utensils,
    tomato_sauce,
    top_round,
    tortilla_chips,
    waffles_pancakes,
    zuchini_bread,
  ]
  
  const sameType = recipes.filter((recipe) => recipe.includes(recipeType)) as string[]
  
  return (
    <div>
      {recipeType === "View_all" ? (
        <div className="flex flex-wrap gap-4">
          {recipes.map((recipe) => (
            <img src={recipe} alt={recipe} key={recipe} className={className} />
          ))}
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap gap-4">
            {sameType.map((recipe) => (
              <img src={recipe} alt={recipe} key={recipe} className={className} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
