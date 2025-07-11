<?php

$mock = <<<XML
{
    "character_sheet": "url(img/ficha_pt-BR_pdf.jpg)",
    "character_heroic_culture": "Elfos de Lindon",
    "character_calling": "Capitão",
    "character_attributes_strength": 4,
    "character_attributes_heart": 4,
    "character_attributes_wits": 6,
    "character_attributes_endurance": 24,
    "character_attributes_hope": 12,
    "character_attributes_parry": 18,
    "character_attributes_TN_strength": 15,
    "character_attributes_TN_heart": 16,
    "character_attributes_TN_wits": 14,
    "character_cultural_blessing": "1 Esperança para Sucesso Mágico (apenas Habilidades, não pode estar Abatido)",
    "character_standard_of_living": "Frugal",
    "character_age": 152,
    "character_name": "Amras",
    "character_imagem_path": "img/characters/elves_of_lindon/m0.jpg",
    "character_treasure": 0,
    "character_flaws": "",
    "character_patron": "",
    "character_favoured_skills_Awe": false,
    "character_favoured_skills_Athletics": false,
    "character_favoured_skills_Awareness": false,
    "character_favoured_skills_Hunting": false,
    "character_favoured_skills_Song": false,
    "character_favoured_skills_Craft": false,
    "character_favoured_skills_Enhearten": false,
    "character_favoured_skills_Travel": false,
    "character_favoured_skills_Insight": false,
    "character_favoured_skills_Healing": false,
    "character_favoured_skills_Courtesy": false,
    "character_favoured_skills_Battle": true,
    "character_favoured_skills_Persuade": true,
    "character_favoured_skills_Stealth": false,
    "character_favoured_skills_Scan": false,
    "character_favoured_skills_Explore": false,
    "character_favoured_skills_Riddle": false,
    "character_favoured_skills_Lore": true,
    "character_distinctive_features_1": "Nobre, Alegre",
    "character_distinctive_features_2": "Liderança",
    "character_shadow_path": "Ganância pelo Poder",
    "character_war_gear_0_name": "Lança Longa",
    "character_war_gear_0_damage": 5,
    "character_war_gear_0_injury": "16",
    "character_war_gear_0_load": 4,
    "character_war_gear_0_notes": "2 mãos",
    "character_war_gear_1_name": "Espada Curta",
    "character_war_gear_1_damage": 3,
    "character_war_gear_1_injury": "16",
    "character_war_gear_1_load": 1,
    "character_war_gear_1_notes": "",
    "character_war_gear_2_name": "",
    "character_war_gear_2_damage": "",
    "character_war_gear_2_injury": "",
    "character_war_gear_2_load": "",
    "character_war_gear_2_notes": "",
    "character_war_gear_3_name": "",
    "character_war_gear_3_damage": "",
    "character_war_gear_3_injury": "",
    "character_war_gear_3_load": "",
    "character_war_gear_3_notes": "",
    "character_armour_name": "Colete de Couro",
    "character_armour_protection": "2d",
    "character_armour_load": 6,
    "character_helm_name": "Elmo",
    "character_helm_protection": "+1d",
    "character_helm_load": 4,
    "character_shield_name": "",
    "character_shield_parry_modifier": "",
    "character_shield_load": "",
    "character_notes": "Linha e agulha de costura: Ofício. Remova no máximo 1 Sombra durante a Fase de Sociedade",
    "character_current_stats_adventure_points": 0,
    "character_current_stats_skill_points": 0,
    "character_current_stats_fellowship_score": 0,
    "character_current_stats_current_endurance": 24,
    "character_current_stats_load": 15,
    "character_current_stats_fatigue": 0,
    "character_current_stats_current_hope": 12,
    "character_current_stats_shadow": 0,
    "character_current_stats_shadow_scars": 0,
    "character_current_stats_weary": false,
    "character_current_stats_miserable": false,
    "character_current_stats_wounded": false,
    "character_current_stats_injury": "",
    "character_rewards": "AJUSTE AO CORPO: Adicione +2 ao resultado de PROTEÇÃO (Colete de Couro)",
    "character_virtues": "PROEZA: Diminua um Número Alvo de Atributo em 1",
    "character_wisdow": 1,
    "character_valour": 1,
    "character_skills_Awe_1": true,
    "character_skills_Awe_2": true,
    "character_skills_Awe_3": false,
    "character_skills_Awe_4": false,
    "character_skills_Awe_5": false,
    "character_skills_Awe_6": false,
    "character_skills_Athletics_1": true,
    "character_skills_Athletics_2": true,
    "character_skills_Athletics_3": false,
    "character_skills_Athletics_4": false,
    "character_skills_Athletics_5": false,
    "character_skills_Athletics_6": false,
    "character_skills_Awareness_1": true,
    "character_skills_Awareness_2": true,
    "character_skills_Awareness_3": false,
    "character_skills_Awareness_4": false,
    "character_skills_Awareness_5": false,
    "character_skills_Awareness_6": false,
    "character_skills_Hunting_1": false,
    "character_skills_Hunting_2": false,
    "character_skills_Hunting_3": false,
    "character_skills_Hunting_4": false,
    "character_skills_Hunting_5": false,
    "character_skills_Hunting_6": false,
    "character_skills_Song_1": true,
    "character_skills_Song_2": true,
    "character_skills_Song_3": false,
    "character_skills_Song_4": false,
    "character_skills_Song_5": false,
    "character_skills_Song_6": false,
    "character_skills_Craft_1": true,
    "character_skills_Craft_2": true,
    "character_skills_Craft_3": false,
    "character_skills_Craft_4": false,
    "character_skills_Craft_5": false,
    "character_skills_Craft_6": false,
    "character_skills_Enhearten_1": true,
    "character_skills_Enhearten_2": false,
    "character_skills_Enhearten_3": false,
    "character_skills_Enhearten_4": false,
    "character_skills_Enhearten_5": false,
    "character_skills_Enhearten_6": false,
    "character_skills_Travel_1": false,
    "character_skills_Travel_2": false,
    "character_skills_Travel_3": false,
    "character_skills_Travel_4": false,
    "character_skills_Travel_5": false,
    "character_skills_Travel_6": false,
    "character_skills_Insight_1": true,
    "character_skills_Insight_2": true,
    "character_skills_Insight_3": false,
    "character_skills_Insight_4": false,
    "character_skills_Insight_5": false,
    "character_skills_Insight_6": false,
    "character_skills_Healing_1": true,
    "character_skills_Healing_2": false,
    "character_skills_Healing_3": false,
    "character_skills_Healing_4": false,
    "character_skills_Healing_5": false,
    "character_skills_Healing_6": false,
    "character_skills_Courtesy_1": false,
    "character_skills_Courtesy_2": false,
    "character_skills_Courtesy_3": false,
    "character_skills_Courtesy_4": false,
    "character_skills_Courtesy_5": false,
    "character_skills_Courtesy_6": false,
    "character_skills_Battle_1": false,
    "character_skills_Battle_2": false,
    "character_skills_Battle_3": false,
    "character_skills_Battle_4": false,
    "character_skills_Battle_5": false,
    "character_skills_Battle_6": false,
    "character_skills_Persuade_1": false,
    "character_skills_Persuade_2": false,
    "character_skills_Persuade_3": false,
    "character_skills_Persuade_4": false,
    "character_skills_Persuade_5": false,
    "character_skills_Persuade_6": false,
    "character_skills_Stealth_1": true,
    "character_skills_Stealth_2": true,
    "character_skills_Stealth_3": true,
    "character_skills_Stealth_4": false,
    "character_skills_Stealth_5": false,
    "character_skills_Stealth_6": false,
    "character_skills_Scan_1": false,
    "character_skills_Scan_2": false,
    "character_skills_Scan_3": false,
    "character_skills_Scan_4": false,
    "character_skills_Scan_5": false,
    "character_skills_Scan_6": false,
    "character_skills_Explore_1": false,
    "character_skills_Explore_2": false,
    "character_skills_Explore_3": false,
    "character_skills_Explore_4": false,
    "character_skills_Explore_5": false,
    "character_skills_Explore_6": false,
    "character_skills_Riddle_1": true,
    "character_skills_Riddle_2": false,
    "character_skills_Riddle_3": false,
    "character_skills_Riddle_4": false,
    "character_skills_Riddle_5": false,
    "character_skills_Riddle_6": false,
    "character_skills_Lore_1": true,
    "character_skills_Lore_2": true,
    "character_skills_Lore_3": true,
    "character_skills_Lore_4": false,
    "character_skills_Lore_5": false,
    "character_skills_Lore_6": false,
    "character_combat_proficiencies_Axes_1": true,
    "character_combat_proficiencies_Axes_2": false,
    "character_combat_proficiencies_Axes_3": false,
    "character_combat_proficiencies_Axes_4": false,
    "character_combat_proficiencies_Axes_5": false,
    "character_combat_proficiencies_Axes_6": false,
    "character_combat_proficiencies_Bows_1": false,
    "character_combat_proficiencies_Bows_2": false,
    "character_combat_proficiencies_Bows_3": false,
    "character_combat_proficiencies_Bows_4": false,
    "character_combat_proficiencies_Bows_5": false,
    "character_combat_proficiencies_Bows_6": false,
    "character_combat_proficiencies_Spears_1": true,
    "character_combat_proficiencies_Spears_2": true,
    "character_combat_proficiencies_Spears_3": false,
    "character_combat_proficiencies_Spears_4": false,
    "character_combat_proficiencies_Spears_5": false,
    "character_combat_proficiencies_Spears_6": false,
    "character_combat_proficiencies_Swords_1": true,
    "character_combat_proficiencies_Swords_2": true,
    "character_combat_proficiencies_Swords_3": false,
    "character_combat_proficiencies_Swords_4": false,
    "character_combat_proficiencies_Swords_5": false,
    "character_combat_proficiencies_Swords_6": false
}
XML;

//$json = file_get_contents('php://input');
$obj = NULL;

$recebeu_post = FALSE;

if (isset($_POST['hidden_character_sheet'])) {
    $recebeu_post = TRUE;
}

if ($recebeu_post == FALSE) {
    $obj = json_decode($mock);
} else {
    $obj = array(
      "character_sheet" => $_POST['hidden_character_sheet'],
      "character_heroic_culture" => $_POST['character_heroic_culture'],
      "character_calling" => $_POST['character_calling'],
      "character_attributes_strength" => $_POST['character_attributes_strength'],
      "character_attributes_heart" => $_POST['character_attributes_heart'],
      "character_attributes_wits" => $_POST['character_attributes_wits'],
      "character_attributes_endurance" => $_POST['character_attributes_endurance'],
      "character_attributes_hope" => $_POST['character_attributes_hope'],
      "character_attributes_parry" => $_POST['character_attributes_parry'],
      "character_attributes_TN_strength" => $_POST['character_attributes_TN_strength'],
      "character_attributes_TN_heart" => $_POST['character_attributes_TN_heart'],
      "character_attributes_TN_wits" => $_POST['character_attributes_TN_wits'],
      "character_cultural_blessing" => $_POST['character_cultural_blessing'],
      "character_standard_of_living" => $_POST['character_standard_of_living'],
      "character_age" => $_POST['character_age'],
      "character_name" => $_POST['character_name'],
      "character_imagem_path" => $_POST['hidden_character_imagem_path'],
      "character_treasure" => $_POST['character_treasure'],
      "character_flaws" => $_POST['character_flaws'],
      "character_patron" => $_POST['character_patron'],
      "character_favoured_skills_Awe" => $_POST['character_favoured_skills_Awe'] == "on",
      "character_favoured_skills_Athletics" => $_POST['character_favoured_skills_Athletics'] == "on",
      "character_favoured_skills_Awareness" => $_POST['character_favoured_skills_Awareness'] == "on",
      "character_favoured_skills_Hunting" => $_POST['character_favoured_skills_Hunting'] == "on",
      "character_favoured_skills_Song" => $_POST['character_favoured_skills_Song'] == "on",
      "character_favoured_skills_Craft" => $_POST['character_favoured_skills_Craft'] == "on",
      "character_favoured_skills_Enhearten" => $_POST['character_favoured_skills_Enhearten'] == "on",
      "character_favoured_skills_Travel" => $_POST['character_favoured_skills_Travel'] == "on",
      "character_favoured_skills_Insight" => $_POST['character_favoured_skills_Insight'] == "on",
      "character_favoured_skills_Healing" => $_POST['character_favoured_skills_Healing'] == "on",
      "character_favoured_skills_Courtesy" => $_POST['character_favoured_skills_Courtesy'] == "on",
      "character_favoured_skills_Battle" => $_POST['character_favoured_skills_Battle'] == "on",
      "character_favoured_skills_Persuade" => $_POST['character_favoured_skills_Persuade'] == "on",
      "character_favoured_skills_Stealth" => $_POST['character_favoured_skills_Stealth'] == "on",
      "character_favoured_skills_Scan" => $_POST['character_favoured_skills_Scan'] == "on",
      "character_favoured_skills_Explore" => $_POST['character_favoured_skills_Explore'] == "on",
      "character_favoured_skills_Riddle" => $_POST['character_favoured_skills_Riddle'] == "on",
      "character_favoured_skills_Lore" => $_POST['character_favoured_skills_Lore'] == "on",
      "character_distinctive_features_1" => $_POST['character_distinctive_features_1'],
      "character_distinctive_features_2" => $_POST['character_distinctive_features_2'],
      "character_shadow_path" => $_POST['character_shadow_path'],
      "character_war_gear_0_name" => $_POST['character_war_gear_0_name'],
      "character_war_gear_0_damage" => $_POST['character_war_gear_0_damage'],
      "character_war_gear_0_injury" => $_POST['character_war_gear_0_injury'],
      "character_war_gear_0_load" => $_POST['character_war_gear_0_load'],
      "character_war_gear_0_notes" => $_POST['character_war_gear_0_notes'],
      "character_war_gear_1_name" => $_POST['character_war_gear_1_name'],
      "character_war_gear_1_damage" => $_POST['character_war_gear_1_damage'],
      "character_war_gear_1_injury" => $_POST['character_war_gear_1_injury'],
      "character_war_gear_1_load" => $_POST['character_war_gear_1_load'],
      "character_war_gear_1_notes" => $_POST['character_war_gear_1_notes'],
      "character_war_gear_2_name" => $_POST['character_war_gear_2_name'],
      "character_war_gear_2_damage" => $_POST['character_war_gear_2_damage'],
      "character_war_gear_2_injury" => $_POST['character_war_gear_2_injury'],
      "character_war_gear_2_load" => $_POST['character_war_gear_2_load'],
      "character_war_gear_2_notes" => $_POST['character_war_gear_2_notes'],
      "character_war_gear_3_name" => $_POST['character_war_gear_3_name'],
      "character_war_gear_3_damage" => $_POST['character_war_gear_3_damage'],
      "character_war_gear_3_injury" => $_POST['character_war_gear_3_injury'],
      "character_war_gear_3_load" => $_POST['character_war_gear_3_load'],
      "character_war_gear_3_notes" => $_POST['character_war_gear_3_notes'],
      "character_armour_name" => $_POST['character_armour_name'],
      "character_armour_protection" => $_POST['character_armour_protection'],
      "character_armour_load" => $_POST['character_armour_load'],
      "character_helm_name" => $_POST['character_helm_name'],
      "character_helm_protection" => $_POST['character_helm_protection'],
      "character_helm_load" => $_POST['character_helm_load'],
      "character_shield_name" => $_POST['character_shield_name'],
      "character_shield_parry_modifier" => $_POST['character_shield_parry_modifier'],
      "character_shield_load" => $_POST['character_shield_load'],
      "character_notes" => nl2br($_POST['character_notes']),
      "character_current_stats_adventure_points" => $_POST['character_current_stats_adventure_points'],
      "character_current_stats_skill_points" => $_POST['character_current_stats_skill_points'],
      "character_current_stats_fellowship_score" => $_POST['character_current_stats_fellowship_score'],
      "character_current_stats_current_endurance" => $_POST['character_current_stats_current_endurance'],
      "character_current_stats_load" => $_POST['character_current_stats_load'],
      "character_current_stats_fatigue" => $_POST['character_current_stats_fatigue'],
      "character_current_stats_current_hope" => $_POST['character_current_stats_current_hope'],
      "character_current_stats_shadow" => $_POST['character_current_stats_shadow'],
      "character_current_stats_shadow_scars" => $_POST['character_current_stats_shadow_scars'],
      "character_current_stats_weary" => $_POST['character_current_stats_weary'] == "on",
      "character_current_stats_miserable" => $_POST['character_current_stats_miserable'] == "on",
      "character_current_stats_wounded" => $_POST['character_current_stats_wounded'] == "on",
      "character_current_stats_injury" => $_POST['character_current_stats_injury'],
      "character_rewards" => nl2br($_POST['character_rewards']),
      "character_virtues" => nl2br($_POST['character_virtues']),
      "character_wisdow" => $_POST['character_wisdow'],
      "character_valour" => $_POST['character_valour'],
      "character_skills_Awe_1" => $_POST['character_skills_Awe_1'] == "on",
      "character_skills_Awe_2" => $_POST['character_skills_Awe_2'] == "on",
      "character_skills_Awe_3" => $_POST['character_skills_Awe_3'] == "on",
      "character_skills_Awe_4" => $_POST['character_skills_Awe_4'] == "on",
      "character_skills_Awe_5" => $_POST['character_skills_Awe_5'] == "on",
      "character_skills_Awe_6" => $_POST['character_skills_Awe_6'] == "on",
      "character_skills_Athletics_1" => $_POST['character_skills_Athletics_1'] == "on",
      "character_skills_Athletics_2" => $_POST['character_skills_Athletics_2'] == "on",
      "character_skills_Athletics_3" => $_POST['character_skills_Athletics_3'] == "on",
      "character_skills_Athletics_4" => $_POST['character_skills_Athletics_4'] == "on",
      "character_skills_Athletics_5" => $_POST['character_skills_Athletics_5'] == "on",
      "character_skills_Athletics_6" => $_POST['character_skills_Athletics_6'] == "on",
      "character_skills_Awareness_1" => $_POST['character_skills_Awareness_1'] == "on",
      "character_skills_Awareness_2" => $_POST['character_skills_Awareness_2'] == "on",
      "character_skills_Awareness_3" => $_POST['character_skills_Awareness_3'] == "on",
      "character_skills_Awareness_4" => $_POST['character_skills_Awareness_4'] == "on",
      "character_skills_Awareness_5" => $_POST['character_skills_Awareness_5'] == "on",
      "character_skills_Awareness_6" => $_POST['character_skills_Awareness_6'] == "on",
      "character_skills_Hunting_1" => $_POST['character_skills_Hunting_1'] == "on",
      "character_skills_Hunting_2" => $_POST['character_skills_Hunting_2'] == "on",
      "character_skills_Hunting_3" => $_POST['character_skills_Hunting_3'] == "on",
      "character_skills_Hunting_4" => $_POST['character_skills_Hunting_4'] == "on",
      "character_skills_Hunting_5" => $_POST['character_skills_Hunting_5'] == "on",
      "character_skills_Hunting_6" => $_POST['character_skills_Hunting_6'] == "on",
      "character_skills_Song_1" => $_POST['character_skills_Song_1'] == "on",
      "character_skills_Song_2" => $_POST['character_skills_Song_2'] == "on",
      "character_skills_Song_3" => $_POST['character_skills_Song_3'] == "on",
      "character_skills_Song_4" => $_POST['character_skills_Song_4'] == "on",
      "character_skills_Song_5" => $_POST['character_skills_Song_5'] == "on",
      "character_skills_Song_6" => $_POST['character_skills_Song_6'] == "on",
      "character_skills_Craft_1" => $_POST['character_skills_Craft_1'] == "on",
      "character_skills_Craft_2" => $_POST['character_skills_Craft_2'] == "on",
      "character_skills_Craft_3" => $_POST['character_skills_Craft_3'] == "on",
      "character_skills_Craft_4" => $_POST['character_skills_Craft_4'] == "on",
      "character_skills_Craft_5" => $_POST['character_skills_Craft_5'] == "on",
      "character_skills_Craft_6" => $_POST['character_skills_Craft_6'] == "on",
      "character_skills_Enhearten_1" => $_POST['character_skills_Enhearten_1'] == "on",
      "character_skills_Enhearten_2" => $_POST['character_skills_Enhearten_2'] == "on",
      "character_skills_Enhearten_3" => $_POST['character_skills_Enhearten_3'] == "on",
      "character_skills_Enhearten_4" => $_POST['character_skills_Enhearten_4'] == "on",
      "character_skills_Enhearten_5" => $_POST['character_skills_Enhearten_5'] == "on",
      "character_skills_Enhearten_6" => $_POST['character_skills_Enhearten_6'] == "on",
      "character_skills_Travel_1" => $_POST['character_skills_Travel_1'] == "on",
      "character_skills_Travel_2" => $_POST['character_skills_Travel_2'] == "on",
      "character_skills_Travel_3" => $_POST['character_skills_Travel_3'] == "on",
      "character_skills_Travel_4" => $_POST['character_skills_Travel_4'] == "on",
      "character_skills_Travel_5" => $_POST['character_skills_Travel_5'] == "on",
      "character_skills_Travel_6" => $_POST['character_skills_Travel_6'] == "on",
      "character_skills_Insight_1" => $_POST['character_skills_Insight_1'] == "on",
      "character_skills_Insight_2" => $_POST['character_skills_Insight_2'] == "on",
      "character_skills_Insight_3" => $_POST['character_skills_Insight_3'] == "on",
      "character_skills_Insight_4" => $_POST['character_skills_Insight_4'] == "on",
      "character_skills_Insight_5" => $_POST['character_skills_Insight_5'] == "on",
      "character_skills_Insight_6" => $_POST['character_skills_Insight_6'] == "on",
      "character_skills_Healing_1" => $_POST['character_skills_Healing_1'] == "on",
      "character_skills_Healing_2" => $_POST['character_skills_Healing_2'] == "on",
      "character_skills_Healing_3" => $_POST['character_skills_Healing_3'] == "on",
      "character_skills_Healing_4" => $_POST['character_skills_Healing_4'] == "on",
      "character_skills_Healing_5" => $_POST['character_skills_Healing_5'] == "on",
      "character_skills_Healing_6" => $_POST['character_skills_Healing_6'] == "on",
      "character_skills_Courtesy_1" => $_POST['character_skills_Courtesy_1'] == "on",
      "character_skills_Courtesy_2" => $_POST['character_skills_Courtesy_2'] == "on",
      "character_skills_Courtesy_3" => $_POST['character_skills_Courtesy_3'] == "on",
      "character_skills_Courtesy_4" => $_POST['character_skills_Courtesy_4'] == "on",
      "character_skills_Courtesy_5" => $_POST['character_skills_Courtesy_5'] == "on",
      "character_skills_Courtesy_6" => $_POST['character_skills_Courtesy_6'] == "on",
      "character_skills_Battle_1" => $_POST['character_skills_Battle_1'] == "on",
      "character_skills_Battle_2" => $_POST['character_skills_Battle_2'] == "on",
      "character_skills_Battle_3" => $_POST['character_skills_Battle_3'] == "on",
      "character_skills_Battle_4" => $_POST['character_skills_Battle_4'] == "on",
      "character_skills_Battle_5" => $_POST['character_skills_Battle_5'] == "on",
      "character_skills_Battle_6" => $_POST['character_skills_Battle_6'] == "on",
      "character_skills_Persuade_1" => $_POST['character_skills_Persuade_1'] == "on",
      "character_skills_Persuade_2" => $_POST['character_skills_Persuade_2'] == "on",
      "character_skills_Persuade_3" => $_POST['character_skills_Persuade_3'] == "on",
      "character_skills_Persuade_4" => $_POST['character_skills_Persuade_4'] == "on",
      "character_skills_Persuade_5" => $_POST['character_skills_Persuade_5'] == "on",
      "character_skills_Persuade_6" => $_POST['character_skills_Persuade_6'] == "on",
      "character_skills_Stealth_1" => $_POST['character_skills_Stealth_1'] == "on",
      "character_skills_Stealth_2" => $_POST['character_skills_Stealth_2'] == "on",
      "character_skills_Stealth_3" => $_POST['character_skills_Stealth_3'] == "on",
      "character_skills_Stealth_4" => $_POST['character_skills_Stealth_4'] == "on",
      "character_skills_Stealth_5" => $_POST['character_skills_Stealth_5'] == "on",
      "character_skills_Stealth_6" => $_POST['character_skills_Stealth_6'] == "on",
      "character_skills_Scan_1" => $_POST['character_skills_Scan_1'] == "on",
      "character_skills_Scan_2" => $_POST['character_skills_Scan_2'] == "on",
      "character_skills_Scan_3" => $_POST['character_skills_Scan_3'] == "on",
      "character_skills_Scan_4" => $_POST['character_skills_Scan_4'] == "on",
      "character_skills_Scan_5" => $_POST['character_skills_Scan_5'] == "on",
      "character_skills_Scan_6" => $_POST['character_skills_Scan_6'] == "on",
      "character_skills_Explore_1" => $_POST['character_skills_Explore_1'] == "on",
      "character_skills_Explore_2" => $_POST['character_skills_Explore_2'] == "on",
      "character_skills_Explore_3" => $_POST['character_skills_Explore_3'] == "on",
      "character_skills_Explore_4" => $_POST['character_skills_Explore_4'] == "on",
      "character_skills_Explore_5" => $_POST['character_skills_Explore_5'] == "on",
      "character_skills_Explore_6" => $_POST['character_skills_Explore_6'] == "on",
      "character_skills_Riddle_1" => $_POST['character_skills_Riddle_1'] == "on",
      "character_skills_Riddle_2" => $_POST['character_skills_Riddle_2'] == "on",
      "character_skills_Riddle_3" => $_POST['character_skills_Riddle_3'] == "on",
      "character_skills_Riddle_4" => $_POST['character_skills_Riddle_4'] == "on",
      "character_skills_Riddle_5" => $_POST['character_skills_Riddle_5'] == "on",
      "character_skills_Riddle_6" => $_POST['character_skills_Riddle_6'] == "on",
      "character_skills_Lore_1" => $_POST['character_skills_Lore_1'] == "on",
      "character_skills_Lore_2" => $_POST['character_skills_Lore_2'] == "on",
      "character_skills_Lore_3" => $_POST['character_skills_Lore_3'] == "on",
      "character_skills_Lore_4" => $_POST['character_skills_Lore_4'] == "on",
      "character_skills_Lore_5" => $_POST['character_skills_Lore_5'] == "on",
      "character_skills_Lore_6" => $_POST['character_skills_Lore_6'] == "on",
      "character_combat_proficiencies_Axes_1" => $_POST['character_combat_proficiencies_Axes_1'] == "on",
      "character_combat_proficiencies_Axes_2" => $_POST['character_combat_proficiencies_Axes_2'] == "on",
      "character_combat_proficiencies_Axes_3" => $_POST['character_combat_proficiencies_Axes_3'] == "on",
      "character_combat_proficiencies_Axes_4" => $_POST['character_combat_proficiencies_Axes_4'] == "on",
      "character_combat_proficiencies_Axes_5" => $_POST['character_combat_proficiencies_Axes_5'] == "on",
      "character_combat_proficiencies_Axes_6" => $_POST['character_combat_proficiencies_Axes_6'] == "on",
      "character_combat_proficiencies_Bows_1" => $_POST['character_combat_proficiencies_Bows_1'] == "on",
      "character_combat_proficiencies_Bows_2" => $_POST['character_combat_proficiencies_Bows_2'] == "on",
      "character_combat_proficiencies_Bows_3" => $_POST['character_combat_proficiencies_Bows_3'] == "on",
      "character_combat_proficiencies_Bows_4" => $_POST['character_combat_proficiencies_Bows_4'] == "on",
      "character_combat_proficiencies_Bows_5" => $_POST['character_combat_proficiencies_Bows_5'] == "on",
      "character_combat_proficiencies_Bows_6" => $_POST['character_combat_proficiencies_Bows_6'] == "on",
      "character_combat_proficiencies_Spears_1" => $_POST['character_combat_proficiencies_Spears_1'] == "on",
      "character_combat_proficiencies_Spears_2" => $_POST['character_combat_proficiencies_Spears_2'] == "on",
      "character_combat_proficiencies_Spears_3" => $_POST['character_combat_proficiencies_Spears_3'] == "on",
      "character_combat_proficiencies_Spears_4" => $_POST['character_combat_proficiencies_Spears_4'] == "on",
      "character_combat_proficiencies_Spears_5" => $_POST['character_combat_proficiencies_Spears_5'] == "on",
      "character_combat_proficiencies_Spears_6" => $_POST['character_combat_proficiencies_Spears_6'] == "on",
      "character_combat_proficiencies_Swords_1" => $_POST['character_combat_proficiencies_Swords_1'] == "on",
      "character_combat_proficiencies_Swords_2" => $_POST['character_combat_proficiencies_Swords_2'] == "on",
      "character_combat_proficiencies_Swords_3" => $_POST['character_combat_proficiencies_Swords_3'] == "on",
      "character_combat_proficiencies_Swords_4" => $_POST['character_combat_proficiencies_Swords_4'] == "on",
      "character_combat_proficiencies_Swords_5" => $_POST['character_combat_proficiencies_Swords_5'] == "on",
      "character_combat_proficiencies_Swords_6" => $_POST['character_combat_proficiencies_Swords_6'] == "on"
    );
    
    $obj['character_rewards'] = str_replace('<br />', '&#xA;', $obj['character_rewards']);
    $obj['character_virtues'] = str_replace('<br />', '&#xA;', $obj['character_virtues']);
    $obj['character_notes'] = str_replace('<br />', '&#xA;', $obj['character_notes']);
}

?>

<style type="text/css">
body {
  margin: 0;
  padding: 0;
  border: 0;
}

<?php

    $css_left_heroic_culture = '106px';
    $css_width_heroic_culture = '185px';
    
    $css_left_cultural_blessing = '114px';
    $css_width_cultural_blessing = '177px';
    
    $css_left_calling = '74px';
    $css_width_calling = '217px';
    
    $css_left_age = '330px';
    $css_width_age = '39px';
    
    $css_left_shadow_path = '366px';
    $css_width_shadow_path = '200px';
    
    if ($obj['character_sheet'] == 'url(img/ficha_es-ES_pdf.jpg)') {
        $css_left_heroic_culture = '116px';
        $css_width_heroic_culture = '175px';
        
        $css_left_cultural_blessing = '129px';
        $css_width_cultural_blessing = '171px';
        
        $css_left_calling = '94px';
        $css_width_calling = '197px';
        
        $css_left_age = '333px';
        $css_width_age = '36px';
        
        $css_left_shadow_path = '399px';
        $css_width_shadow_path = '167px';
    }
    
    if ($obj['character_sheet'] == 'url(img/ficha_fr-FR_pdf.jpg)') {
        $css_left_heroic_culture = '116px';
        $css_width_heroic_culture = '175px';
        
        $css_left_cultural_blessing = '129px';
        $css_width_cultural_blessing = '171px';
        
        $css_left_calling = '80px';
        $css_width_calling = '211px';
        
        $css_left_age = '330px';
        $css_width_age = '39px';
        
        $css_left_shadow_path = '380px';
        $css_width_shadow_path = '186px';
    }
    
?>

#page {
  background-image: <?=$obj['character_sheet']?>;
  background-repeat: no-repeat;
  background-position: left top;

  position: relative;
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  border: 0;

  width: 1148px;
  height: 889px;
}

#page input[type=text] {
  font-family: 'newbaskerville', sans-serif;
}

#character_name {
  position: absolute;
  border: 0;
  text-align: center;

  left: 386px;
  top: 48px;
  width: 377px;
  font-size: 28px;
}

#character_heroic_culture {
  position: absolute;
  border: 0;
  text-align: left;

  left: <?=$css_left_heroic_culture?>;
  top: 94px;
  width: <?=$css_width_heroic_culture?>;
  font-size: 14px;
}

#character_cultural_blessing {
  position: absolute;
  border: 0;
  text-align: left;

  left: <?=$css_left_cultural_blessing?>;
  top: 120px;
  width: <?=$css_width_cultural_blessing?>;
  font-size: 12px;

  height: 22px;
}

#character_calling {
  position: absolute;
  border: 0;
  text-align: left;

  left: <?=$css_left_calling?>;
  top: 146px;
  width: <?=$css_width_calling?>;
  font-size: 18px;
}

#character_age {
  position: absolute;
  border: 0;
  text-align: left;

  left: <?=$css_left_age?>;
  top: 94px;
  width: <?=$css_width_age?>;
  font-size: 18px;
}

#character_standard_of_living {
  position: absolute;
  border: 0;
  text-align: left;

  left: 462px;
  top: 94px;
  width: 54px;
  font-size: 12px;

  height: 22px;
}

#character_patron {
  position: absolute;
  border: 0;
  text-align: left;

  left: 338px;
  top: 120px;
  width: 178px;
  font-size: 18px;
}

#character_shadow_path {
  position: absolute;
  border: 0;
  text-align: left;

  left: <?=$css_left_shadow_path?>;
  top: 146px;
  width: <?=$css_width_shadow_path?>;
  font-size: 18px;
}

#character_treasure {
  position: absolute;
  border: 0;
  text-align: center;

  left: 529px;
  top: 110px;
  width: 35px;
  font-size: 22px;

  height: 32px;
}

#character_distinctive_features_1 {
  position: absolute;
  border: 0;
  text-align: left;

  left: 668px;
  top: 94px;
  width: 173px;
  font-size: 18px;
}

#character_distinctive_features_2 {
  position: absolute;
  border: 0;
  text-align: left;

  left: 582px;
  top: 120px;
  width: 259px;
  font-size: 15px;
}

#character_flaws {
  position: absolute;
  border: 0;
  text-align: left;

  left: 608px;
  top: 146px;
  width: 233px;
  font-size: 18px;
}

#character_imagem_path {
  position: absolute;
  left: 866px;
  top: 102px;
  width: 240px;
  height: 173px;
}

div.attributes {
  /*background-color: rgba(0,255,0,0.3);*/
}

div.attributes input {
  /*background-color: rgba(0,0,0,0);*/
}

/* Bloco de atributo */

#character_div_strength {
  position: absolute;
  left: 103px;
  top: 218px;
  width: 120px;
  height: 120px;
}

#character_attributes_strength {
  position: absolute;
  border: 0;
  text-align: center;

  left: 73px;
  top: 12px;
  width: 37px;
  font-size: 26px;
}

#character_attributes_TN_strength {
  position: absolute;
  border: 0;
  text-align: center;

  left: 5px;
  top: 36px;
  width: 64px;
  font-size: 36px;
}

#character_attributes_endurance {
  position: absolute;
  border: 0;
  text-align: center;

  left: 73px;
  top: 75px;
  width: 35px;
  font-size: 26px;
}

/* Bloco de atributo */

/* Bloco de atributo */

#character_div_heart {
  position: absolute;
  left: 377px;
  top: 218px;
  width: 120px;
  height: 120px;
}

#character_attributes_heart {
  position: absolute;
  border: 0;
  text-align: center;

  left: 73px;
  top: 12px;
  width: 35px;
  font-size: 26px;
}

#character_attributes_TN_heart {
  position: absolute;
  border: 0;
  text-align: center;

  left: 5px;
  top: 36px;
  width: 66px;
  font-size: 36px;
}

#character_attributes_hope {
  position: absolute;
  border: 0;
  text-align: center;

  left: 73px;
  top: 75px;
  width: 35px;
  font-size: 26px;

  height: 32px;
}

/* Bloco de atributo */

/* Bloco de atributo */

#character_div_wits {
  position: absolute;
  left: 652px;
  top: 218px;
  width: 120px;
  height: 120px;
}

#character_attributes_wits {
  position: absolute;
  border: 0;
  text-align: center;

  left: 73px;
  top: 12px;
  width: 35px;
  font-size: 26px;

  height: 32px;
}

#character_attributes_TN_wits {
  position: absolute;
  border: 0;
  text-align: center;

  left: 5px;
  top: 36px;
  width: 66px;
  font-size: 36px;
}

#character_attributes_parry {
  position: absolute;
  border: 0;
  text-align: center;

  left: 73px;
  top: 75px;
  width: 35px;
  font-size: 26px;

  height: 32px;
}

/* Bloco de atributo */

input.marcador {
  margin: 0;
  padding: 0;
}

div.skills {
  /*background-color: rgba(0,255,0,0.3);*/
}

/* Skill Block */

#character_div_skill_1 {
  position: absolute;
  left: 44px;
  top: 372px;
  width: 244px;
  height: 152px;
}

#character_favoured_skills_Awe {
  position: absolute;
  left: 0;
  top: 1px;
}

#character_favoured_skills_Athletics {
  position: absolute;
  left: 0;
  top: 27px;
}

#character_favoured_skills_Awareness {
  position: absolute;
  left: 0;
  top: 53px;
}

#character_favoured_skills_Hunting {
  position: absolute;
  left: 0;
  top: 80px;
}

#character_favoured_skills_Song {
  position: absolute;
  left: 0;
  top: 106px;
}

#character_favoured_skills_Craft {
  position: absolute;
  left: 0;
  top: 132px;
}

#character_skills_Awe_1 {
  position: absolute;
  left: 109px;
  top: 0;
}

#character_skills_Awe_2 {
  position: absolute;
  left: 132px;
  top: 0;
}

#character_skills_Awe_3 {
  position: absolute;
  left: 155px;
  top: 0;
}

#character_skills_Awe_4 {
  position: absolute;
  left: 177px;
  top: 0;
}

#character_skills_Awe_5 {
  position: absolute;
  left: 200px;
  top: 0;
}

#character_skills_Awe_6 {
  position: absolute;
  left: 223px;
  top: 0;
}

#character_skills_Athletics_1 {
  position: absolute;
  left: 109px;
  top: 27px;
}

#character_skills_Athletics_2 {
  position: absolute;
  left: 132px;
  top: 27px;
}

#character_skills_Athletics_3 {
  position: absolute;
  left: 155px;
  top: 27px;
}

#character_skills_Athletics_4 {
  position: absolute;
  left: 177px;
  top: 27px;
}

#character_skills_Athletics_5 {
  position: absolute;
  left: 200px;
  top: 27px;
}

#character_skills_Athletics_6 {
  position: absolute;
  left: 223px;
  top: 27px;
}

#character_skills_Awareness_1 {
  position: absolute;
  left: 109px;
  top: 53px;
}

#character_skills_Awareness_2 {
  position: absolute;
  left: 132px;
  top: 53px;
}

#character_skills_Awareness_3 {
  position: absolute;
  left: 155px;
  top: 53px;
}

#character_skills_Awareness_4 {
  position: absolute;
  left: 177px;
  top: 53px;
}

#character_skills_Awareness_5 {
  position: absolute;
  left: 200px;
  top: 53px;
}

#character_skills_Awareness_6 {
  position: absolute;
  left: 223px;
  top: 53px;
}

#character_skills_Hunting_1 {
  position: absolute;
  left: 109px;
  top: 79px;
}

#character_skills_Hunting_2 {
  position: absolute;
  left: 132px;
  top: 79px;
}

#character_skills_Hunting_3 {
  position: absolute;
  left: 155px;
  top: 79px;
}

#character_skills_Hunting_4 {
  position: absolute;
  left: 177px;
  top: 79px;
}

#character_skills_Hunting_5 {
  position: absolute;
  left: 200px;
  top: 79px;
}

#character_skills_Hunting_6 {
  position: absolute;
  left: 223px;
  top: 79px;
}

#character_skills_Song_1 {
  position: absolute;
  left: 109px;
  top: 106px;
}

#character_skills_Song_2 {
  position: absolute;
  left: 132px;
  top: 106px;
}

#character_skills_Song_3 {
  position: absolute;
  left: 155px;
  top: 106px;
}

#character_skills_Song_4 {
  position: absolute;
  left: 177px;
  top: 106px;
}

#character_skills_Song_5 {
  position: absolute;
  left: 200px;
  top: 106px;
}

#character_skills_Song_6 {
  position: absolute;
  left: 223px;
  top: 106px;
}

#character_skills_Craft_1 {
  position: absolute;
  left: 109px;
  top: 132px;
}

#character_skills_Craft_2 {
  position: absolute;
  left: 132px;
  top: 132px;
}

#character_skills_Craft_3 {
  position: absolute;
  left: 155px;
  top: 132px;
}

#character_skills_Craft_4 {
  position: absolute;
  left: 177px;
  top: 132px;
}

#character_skills_Craft_5 {
  position: absolute;
  left: 200px;
  top: 132px;
}

#character_skills_Craft_6 {
  position: absolute;
  left: 223px;
  top: 132px;
}

/* Skill Block */


/* Skill Block */

#character_div_skill_2 {
  position: absolute;
  left: 319px;
  top: 372px;
  width: 244px;
  height: 152px;
}

#character_favoured_skills_Enhearten {
  position: absolute;
  left: 0;
  top: 1px;
}

#character_favoured_skills_Travel {
  position: absolute;
  left: 0;
  top: 27px;
}

#character_favoured_skills_Insight {
  position: absolute;
  left: 0;
  top: 53px;
}

#character_favoured_skills_Healing {
  position: absolute;
  left: 0;
  top: 80px;
}

#character_favoured_skills_Courtesy {
  position: absolute;
  left: 0;
  top: 106px;
}

#character_favoured_skills_Battle {
  position: absolute;
  left: 0;
  top: 132px;
}

#character_skills_Enhearten_1 {
  position: absolute;
  left: 109px;
  top: 0;
}

#character_skills_Enhearten_2 {
  position: absolute;
  left: 132px;
  top: 0;
}

#character_skills_Enhearten_3 {
  position: absolute;
  left: 155px;
  top: 0;
}

#character_skills_Enhearten_4 {
  position: absolute;
  left: 177px;
  top: 0;
}

#character_skills_Enhearten_5 {
  position: absolute;
  left: 200px;
  top: 0;
}

#character_skills_Enhearten_6 {
  position: absolute;
  left: 223px;
  top: 0;
}

#character_skills_Travel_1 {
  position: absolute;
  left: 109px;
  top: 27px;
}

#character_skills_Travel_2 {
  position: absolute;
  left: 132px;
  top: 27px;
}

#character_skills_Travel_3 {
  position: absolute;
  left: 155px;
  top: 27px;
}

#character_skills_Travel_4 {
  position: absolute;
  left: 177px;
  top: 27px;
}

#character_skills_Travel_5 {
  position: absolute;
  left: 200px;
  top: 27px;
}

#character_skills_Travel_6 {
  position: absolute;
  left: 223px;
  top: 27px;
}

#character_skills_Insight_1 {
  position: absolute;
  left: 109px;
  top: 53px;
}

#character_skills_Insight_2 {
  position: absolute;
  left: 132px;
  top: 53px;
}

#character_skills_Insight_3 {
  position: absolute;
  left: 155px;
  top: 53px;
}

#character_skills_Insight_4 {
  position: absolute;
  left: 177px;
  top: 53px;
}

#character_skills_Insight_5 {
  position: absolute;
  left: 200px;
  top: 53px;
}

#character_skills_Insight_6 {
  position: absolute;
  left: 223px;
  top: 53px;
}

#character_skills_Healing_1 {
  position: absolute;
  left: 109px;
  top: 79px;
}

#character_skills_Healing_2 {
  position: absolute;
  left: 132px;
  top: 79px;
}

#character_skills_Healing_3 {
  position: absolute;
  left: 155px;
  top: 79px;
}

#character_skills_Healing_4 {
  position: absolute;
  left: 177px;
  top: 79px;
}

#character_skills_Healing_5 {
  position: absolute;
  left: 200px;
  top: 79px;
}

#character_skills_Healing_6 {
  position: absolute;
  left: 223px;
  top: 79px;
}

#character_skills_Courtesy_1 {
  position: absolute;
  left: 109px;
  top: 106px;
}

#character_skills_Courtesy_2 {
  position: absolute;
  left: 132px;
  top: 106px;
}

#character_skills_Courtesy_3 {
  position: absolute;
  left: 155px;
  top: 106px;
}

#character_skills_Courtesy_4 {
  position: absolute;
  left: 177px;
  top: 106px;
}

#character_skills_Courtesy_5 {
  position: absolute;
  left: 200px;
  top: 106px;
}

#character_skills_Courtesy_6 {
  position: absolute;
  left: 223px;
  top: 106px;
}

#character_skills_Battle_1 {
  position: absolute;
  left: 109px;
  top: 132px;
}

#character_skills_Battle_2 {
  position: absolute;
  left: 132px;
  top: 132px;
}

#character_skills_Battle_3 {
  position: absolute;
  left: 155px;
  top: 132px;
}

#character_skills_Battle_4 {
  position: absolute;
  left: 177px;
  top: 132px;
}

#character_skills_Battle_5 {
  position: absolute;
  left: 200px;
  top: 132px;
}

#character_skills_Battle_6 {
  position: absolute;
  left: 223px;
  top: 132px;
}

/* Skill Block */


/* Skill Block */

#character_div_skill_3 {
  position: absolute;
  left: 593px;
  top: 372px;
  width: 244px;
  height: 152px;
}

#character_favoured_skills_Persuade {
  position: absolute;
  left: 0;
  top: 1px;
}

#character_favoured_skills_Stealth {
  position: absolute;
  left: 0;
  top: 27px;
}

#character_favoured_skills_Scan {
  position: absolute;
  left: 0;
  top: 53px;
}

#character_favoured_skills_Explore {
  position: absolute;
  left: 0;
  top: 80px;
}

#character_favoured_skills_Riddle {
  position: absolute;
  left: 0;
  top: 106px;
}

#character_favoured_skills_Lore {
  position: absolute;
  left: 0;
  top: 132px;
}

#character_skills_Persuade_1 {
  position: absolute;
  left: 109px;
  top: 0;
}

#character_skills_Persuade_2 {
  position: absolute;
  left: 132px;
  top: 0;
}

#character_skills_Persuade_3 {
  position: absolute;
  left: 155px;
  top: 0;
}

#character_skills_Persuade_4 {
  position: absolute;
  left: 177px;
  top: 0;
}

#character_skills_Persuade_5 {
  position: absolute;
  left: 200px;
  top: 0;
}

#character_skills_Persuade_6 {
  position: absolute;
  left: 223px;
  top: 0;
}

#character_skills_Stealth_1 {
  position: absolute;
  left: 109px;
  top: 27px;
}

#character_skills_Stealth_2 {
  position: absolute;
  left: 132px;
  top: 27px;
}

#character_skills_Stealth_3 {
  position: absolute;
  left: 155px;
  top: 27px;
}

#character_skills_Stealth_4 {
  position: absolute;
  left: 177px;
  top: 27px;
}

#character_skills_Stealth_5 {
  position: absolute;
  left: 200px;
  top: 27px;
}

#character_skills_Stealth_6 {
  position: absolute;
  left: 223px;
  top: 27px;
}

#character_skills_Scan_1 {
  position: absolute;
  left: 109px;
  top: 53px;
}

#character_skills_Scan_2 {
  position: absolute;
  left: 132px;
  top: 53px;
}

#character_skills_Scan_3 {
  position: absolute;
  left: 155px;
  top: 53px;
}

#character_skills_Scan_4 {
  position: absolute;
  left: 177px;
  top: 53px;
}

#character_skills_Scan_5 {
  position: absolute;
  left: 200px;
  top: 53px;
}

#character_skills_Scan_6 {
  position: absolute;
  left: 223px;
  top: 53px;
}

#character_skills_Explore_1 {
  position: absolute;
  left: 109px;
  top: 79px;
}

#character_skills_Explore_2 {
  position: absolute;
  left: 132px;
  top: 79px;
}

#character_skills_Explore_3 {
  position: absolute;
  left: 155px;
  top: 79px;
}

#character_skills_Explore_4 {
  position: absolute;
  left: 177px;
  top: 79px;
}

#character_skills_Explore_5 {
  position: absolute;
  left: 200px;
  top: 79px;
}

#character_skills_Explore_6 {
  position: absolute;
  left: 223px;
  top: 79px;
}

#character_skills_Riddle_1 {
  position: absolute;
  left: 109px;
  top: 106px;
}

#character_skills_Riddle_2 {
  position: absolute;
  left: 132px;
  top: 106px;
}

#character_skills_Riddle_3 {
  position: absolute;
  left: 155px;
  top: 106px;
}

#character_skills_Riddle_4 {
  position: absolute;
  left: 177px;
  top: 106px;
}

#character_skills_Riddle_5 {
  position: absolute;
  left: 200px;
  top: 106px;
}

#character_skills_Riddle_6 {
  position: absolute;
  left: 223px;
  top: 106px;
}

#character_skills_Lore_1 {
  position: absolute;
  left: 109px;
  top: 132px;
}

#character_skills_Lore_2 {
  position: absolute;
  left: 132px;
  top: 132px;
}

#character_skills_Lore_3 {
  position: absolute;
  left: 155px;
  top: 132px;
}

#character_skills_Lore_4 {
  position: absolute;
  left: 177px;
  top: 132px;
}

#character_skills_Lore_5 {
  position: absolute;
  left: 200px;
  top: 132px;
}

#character_skills_Lore_6 {
  position: absolute;
  left: 223px;
  top: 132px;
}

/* Skill Block */

/* Proficience Block */

#character_div_proficience {
  position: absolute;
  left: 44px;
  top: 581px;
  width: 244px;
  height: 100px;
}

#character_combat_proficiencies_Axes_1 {
  position: absolute;
  left: 109px;
  top: 1px;
}

#character_combat_proficiencies_Axes_2 {
  position: absolute;
  left: 132px;
  top: 1px;
}

#character_combat_proficiencies_Axes_3 {
  position: absolute;
  left: 155px;
  top: 1px;
}

#character_combat_proficiencies_Axes_4 {
  position: absolute;
  left: 177px;
  top: 1px;
}

#character_combat_proficiencies_Axes_5 {
  position: absolute;
  left: 200px;
  top: 1px;
}

#character_combat_proficiencies_Axes_6 {
  position: absolute;
  left: 223px;
  top: 1px;
}

#character_combat_proficiencies_Bows_1 {
  position: absolute;
  left: 109px;
  top: 27px;
}

#character_combat_proficiencies_Bows_2 {
  position: absolute;
  left: 132px;
  top: 27px;
}

#character_combat_proficiencies_Bows_3 {
  position: absolute;
  left: 155px;
  top: 27px;
}

#character_combat_proficiencies_Bows_4 {
  position: absolute;
  left: 177px;
  top: 27px;
}

#character_combat_proficiencies_Bows_5 {
  position: absolute;
  left: 200px;
  top: 27px;
}

#character_combat_proficiencies_Bows_6 {
  position: absolute;
  left: 223px;
  top: 27px;
}

#character_combat_proficiencies_Spears_1 {
  position: absolute;
  left: 109px;
  top: 53px;
}

#character_combat_proficiencies_Spears_2 {
  position: absolute;
  left: 132px;
  top: 53px;
}

#character_combat_proficiencies_Spears_3 {
  position: absolute;
  left: 155px;
  top: 53px;
}

#character_combat_proficiencies_Spears_4 {
  position: absolute;
  left: 177px;
  top: 53px;
}

#character_combat_proficiencies_Spears_5 {
  position: absolute;
  left: 200px;
  top: 53px;
}

#character_combat_proficiencies_Spears_6 {
  position: absolute;
  left: 223px;
  top: 53px;
}

#character_combat_proficiencies_Swords_1 {
  position: absolute;
  left: 109px;
  top: 79px;
}

#character_combat_proficiencies_Swords_2 {
  position: absolute;
  left: 132px;
  top: 79px;
}

#character_combat_proficiencies_Swords_3 {
  position: absolute;
  left: 155px;
  top: 79px;
}

#character_combat_proficiencies_Swords_4 {
  position: absolute;
  left: 177px;
  top: 79px;
}

#character_combat_proficiencies_Swords_5 {
  position: absolute;
  left: 200px;
  top: 79px;
}

#character_combat_proficiencies_Swords_6 {
  position: absolute;
  left: 223px;
  top: 79px;
}

/* Proficience Block */

#page textarea {
  font-family: 'newbaskerville', sans-serif;
}

#character_rewards {
  position: absolute;
  left: 310px;
  top: 575px;

  overflow-y: scroll;
  border: 0;
}

#character_valour {
  position: absolute;
  border: 0;
  text-align: center;

  left: 525px;
  top: 556px;
  width: 31px;
  font-size: 18px;

  z-index: 1;
}

#character_virtues {
  position: absolute;
  left: 584px;
  top: 575px;

  overflow-y: scroll;
  border: 0;
}

#character_wisdow {
  position: absolute;
  border: 0;
  text-align: center;

  left: 800px;
  top: 556px;
  width: 31px;
  font-size: 18px;

  z-index: 1;
}

/* Weapons Block 0 */

#character_div_weapon_0 {
  position: absolute;
  left: 41px;
  top: 724px;
  width: 525px;
  height: 26px;
}

#character_war_gear_0_name {
  position: absolute;
  border: 0;
  text-align: left;

  left: 0;
  top: 0;
  width: 148px;
  font-size: 12px;

  height: 24px;
}

#character_war_gear_0_damage {
  position: absolute;
  border: 0;
  text-align: center;

  left: 153px;
  top: 0;
  width: 40px;
  font-size: 12px;

  height: 24px;
}

#character_war_gear_0_injury {
  position: absolute;
  border: 0;
  text-align: center;

  left: 198px;
  top: 0;
  width: 41px;
  font-size: 10px;

  height: 24px;
}

#character_war_gear_0_load {
  position: absolute;
  border: 0;
  text-align: center;

  left: 244px;
  top: 0;
  width: 39px;
  font-size: 12px;

  height: 24px;
}

#character_war_gear_0_notes {
  position: absolute;
  border: 0;
  text-align: left;

  left: 289px;
  top: 0;
  width: 227px;
  font-size: 12px;

  height: 24px;
}

/* Weapons Block 0 */

/* Weapons Block 1 */

#character_div_weapon_1 {
  position: absolute;
  left: 41px;
  top: 750px;
  width: 525px;
  height: 26px;
}

#character_war_gear_1_name {
  position: absolute;
  border: 0;
  text-align: left;

  left: 0;
  top: 0;
  width: 148px;
  font-size: 12px;

  height: 24px;
}

#character_war_gear_1_damage {
  position: absolute;
  border: 0;
  text-align: center;

  left: 153px;
  top: 0;
  width: 40px;
  font-size: 12px;

  height: 24px;
}

#character_war_gear_1_injury {
  position: absolute;
  border: 0;
  text-align: center;

  left: 198px;
  top: 0;
  width: 41px;
  font-size: 10px;

  height: 24px;
}

#character_war_gear_1_load {
  position: absolute;
  border: 0;
  text-align: center;

  left: 244px;
  top: 0;
  width: 39px;
  font-size: 12px;

  height: 24px;
}

#character_war_gear_1_notes {
  position: absolute;
  border: 0;
  text-align: left;

  left: 289px;
  top: 0;
  width: 227px;
  font-size: 12px;

  height: 24px;
}

/* Weapons Block 1 */

/* Weapons Block 2 */

#character_div_weapon_2 {
  position: absolute;
  left: 41px;
  top: 776px;
  width: 525px;
  height: 26px;
}

#character_war_gear_2_name {
  position: absolute;
  border: 0;
  text-align: left;

  left: 0;
  top: 0;
  width: 148px;
  font-size: 12px;

  height: 24px;
}

#character_war_gear_2_damage {
  position: absolute;
  border: 0;
  text-align: center;

  left: 153px;
  top: 0;
  width: 40px;
  font-size: 12px;

  height: 24px;
}

#character_war_gear_2_injury {
  position: absolute;
  border: 0;
  text-align: center;

  left: 198px;
  top: 0;
  width: 41px;
  font-size: 10px;

  height: 24px;
}

#character_war_gear_2_load {
  position: absolute;
  border: 0;
  text-align: center;

  left: 244px;
  top: 0;
  width: 39px;
  font-size: 12px;

  height: 24px;
}

#character_war_gear_2_notes {
  position: absolute;
  border: 0;
  text-align: left;

  left: 289px;
  top: 0;
  width: 227px;
  font-size: 12px;

  height: 24px;
}

/* Weapons Block 2 */

/* Weapons Block 3 */

#character_div_weapon_3 {
  position: absolute;
  left: 41px;
  top: 802px;
  width: 525px;
  height: 26px;
}

#character_war_gear_3_name {
  position: absolute;
  border: 0;
  text-align: left;

  left: 0;
  top: 0;
  width: 148px;
  font-size: 12px;

  height: 24px;
}

#character_war_gear_3_damage {
  position: absolute;
  border: 0;
  text-align: center;

  left: 153px;
  top: 0;
  width: 40px;
  font-size: 12px;

  height: 24px;
}

#character_war_gear_3_injury {
  position: absolute;
  border: 0;
  text-align: center;

  left: 198px;
  top: 0;
  width: 41px;
  font-size: 10px;

  height: 24px;
}

#character_war_gear_3_load {
  position: absolute;
  border: 0;
  text-align: center;

  left: 244px;
  top: 0;
  width: 39px;
  font-size: 12px;

  height: 24px;
}

#character_war_gear_3_notes {
  position: absolute;
  border: 0;
  text-align: left;

  left: 289px;
  top: 0;
  width: 227px;
  font-size: 12px;

  height: 24px;
}

/* Weapons Block 3 */


/* Armor Block */

#character_div_armour {
  position: absolute;
  left: 591px;
  top: 724px;
  width: 250px;
  height: 26px;
}

#character_armour_name {
  position: absolute;
  border: 0;
  text-align: left;

  left: 0;
  top: 0;
  width: 151px;
  font-size: 12px;

  height: 24px;
}

#character_armour_protection {
  position: absolute;
  border: 0;
  text-align: center;

  left: 156px;
  top: 0;
  width: 40px;
  font-size: 12px;

  height: 24px;
}

#character_armour_load {
  position: absolute;
  border: 0;
  text-align: center;

  left: 201px;
  top: 0;
  width: 40px;
  font-size: 12px;

  height: 24px;
}

/* Armor Block */

/* Helm Block */

#character_div_helm {
  position: absolute;
  left: 591px;
  top: 750px;
  width: 250px;
  height: 26px;
}

#character_helm_name {
  position: absolute;
  border: 0;
  text-align: left;

  left: 28px;
  top: 0;
  width: 123px;
  font-size: 12px;

  height: 24px;
}

#character_helm_protection {
  position: absolute;
  border: 0;
  text-align: center;

  left: 156px;
  top: 0;
  width: 40px;
  font-size: 12px;

  height: 24px;
}

#character_helm_load {
  position: absolute;
  border: 0;
  text-align: center;

  left: 201px;
  top: 0;
  width: 40px;
  font-size: 12px;

  height: 24px;
}

/* Helm Block */

/* Shield Block */

#character_div_shield {
  position: absolute;
  left: 591px;
  top: 804px;
  width: 250px;
  height: 26px;
}

#character_shield_name {
  position: absolute;
  border: 0;
  text-align: left;

  left: 0;
  top: 0;
  width: 151px;
  font-size: 12px;

  height: 22px;
}

#character_shield_parry_modifier {
  position: absolute;
  border: 0;
  text-align: center;

  left: 156px;
  top: 0;
  width: 40px;
  font-size: 12px;

  height: 22px;
}

#character_shield_load {
  position: absolute;
  border: 0;
  text-align: center;

  left: 201px;
  top: 0;
  width: 40px;
  font-size: 12px;

  height: 22px;
}

/* Shield Block */


#character_current_stats_adventure_points {
  position: absolute;
  border: 0;
  text-align: center;

  left: 883px;
  top: 336px;
  width: 44px;
  font-size: 22px;
}

#character_current_stats_skill_points {
  position: absolute;
  border: 0;
  text-align: center;

  left: 964px;
  top: 336px;
  width: 44px;
  font-size: 22px;
}

#character_current_stats_fellowship_score {
  position: absolute;
  border: 0;
  text-align: center;

  left: 1045px;
  top: 336px;
  width: 44px;
  font-size: 22px;
}

/* Bloco de valores correntes */

#character_div_endurance {
  position: absolute;
  left: 874px;
  top: 415px;
  width: 110px;
  height: 120px;
}

#character_current_stats_load {
  position: absolute;
  border: 0;
  text-align: center;

  left: 70px;
  top: 23px;
  width: 35px;
  font-size: 18px;
}

#character_current_stats_current_endurance {
  position: absolute;
  border: 0;
  text-align: center;

  left: 12px;
  top: 38px;
  width: 56px;
  font-size: 30px;
}

#character_current_stats_fatigue {
  position: absolute;
  border: 0;
  text-align: center;

  left: 70px;
  top: 68px;
  width: 35px;
  font-size: 18px;
}

/* Bloco de valores correntes */


/* Bloco de valores correntes */

#character_div_hope {
  position: absolute;
  left: 995px;
  top: 415px;
  width: 110px;
  height: 120px;
}

#character_current_stats_shadow {
  position: absolute;
  border: 0;
  text-align: center;

  left: 70px;
  top: 23px;
  width: 35px;
  font-size: 18px;
}

#character_current_stats_current_hope {
  position: absolute;
  border: 0;
  text-align: center;

  left: 12px;
  top: 38px;
  width: 56px;
  font-size: 30px;
}

#character_current_stats_shadow_scars {
  position: absolute;
  border: 0;
  text-align: center;

  left: 70px;
  top: 68px;
  width: 35px;
  font-size: 18px;
}

/* Bloco de valores correntes */


#character_current_stats_weary {
  position: absolute;
  left: 868px;
  top: 569px;
}

#character_current_stats_miserable {
  position: absolute;
  left: 868px;
  top: 591px;
}

#character_current_stats_wounded {
  position: absolute;
  left: 868px;
  top: 613px;
}

#character_current_stats_injury {
  position: absolute;
  border: 0;
  text-align: left;

  left: 986px;
  top: 600px;
  width: 120px;
  font-size: 17px;
}

#character_notes {
  position: absolute;
  left: 859px;
  top: 668px;

  font-size: 12px;

  overflow-y: scroll;
  border: 0;
}

</style>
<div id="page">
      <input id="character_name" type="text" value="<?=$obj['character_name']?>">

      <input id="character_heroic_culture" type="text" value="<?=$obj['character_heroic_culture']?>">
      <input id="character_cultural_blessing" type="text" value="<?=$obj['character_cultural_blessing']?>">
      <input id="character_calling" type="text" value="<?=$obj['character_calling']?>">

      <input id="character_age" type="text" value="<?=$obj['character_age']?>">
      <input id="character_standard_of_living" type="text" value="<?=$obj['character_standard_of_living']?>">
      <input id="character_patron" type="text" value="<?=$obj['character_patron']?>">
      <input id="character_shadow_path" type="text" value="<?=$obj['character_shadow_path']?>">

      <input id="character_treasure" type="text" value="<?=$obj['character_treasure']?>">

      <input id="character_distinctive_features_1" type="text" value="<?=$obj['character_distinctive_features_1']?>">
      <input id="character_distinctive_features_2" type="text" value="<?=$obj['character_distinctive_features_2']?>">
      <input id="character_flaws" type="text" value="<?=$obj['character_flaws']?>">

      <img id="character_imagem_path" src="<?=$obj['character_imagem_path']?>">

      <div id="character_div_strength" class="attributes">
        <input id="character_attributes_strength" type="text" value="<?=$obj['character_attributes_strength']?>">
        <input id="character_attributes_TN_strength" type="text" value="<?=$obj['character_attributes_TN_strength']?>">
        <input id="character_attributes_endurance" type="text" value="<?=$obj['character_attributes_endurance']?>">
      </div>

      <div id="character_div_heart" class="attributes">
        <input id="character_attributes_heart" type="text" value="<?=$obj['character_attributes_heart']?>">
        <input id="character_attributes_TN_heart" type="text" value="<?=$obj['character_attributes_TN_heart']?>">
        <input id="character_attributes_hope" type="text" value="<?=$obj['character_attributes_hope']?>">
      </div>

      <div id="character_div_wits" class="attributes">
        <input id="character_attributes_wits" type="text" value="<?=$obj['character_attributes_wits']?>">
        <input id="character_attributes_TN_wits" type="text" value="<?=$obj['character_attributes_TN_wits']?>">
        <input id="character_attributes_parry" type="text" value="<?=$obj['character_attributes_parry']?>">
      </div>

      <div id="character_div_skill_1" class="skills">
        <input id="character_favoured_skills_Awe" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Awe'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Athletics" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Athletics'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Awareness" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Awareness'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Hunting" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Hunting'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Song" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Song'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Craft" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Craft'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Awe_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Awe_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Awe_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Awe_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Awe_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Awe_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Awe_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Awe_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Awe_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Awe_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Awe_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Awe_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Athletics_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Athletics_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Athletics_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Athletics_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Athletics_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Athletics_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Athletics_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Athletics_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Athletics_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Athletics_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Athletics_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Athletics_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Awareness_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Awareness_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Awareness_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Awareness_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Awareness_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Awareness_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Awareness_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Awareness_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Awareness_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Awareness_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Awareness_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Awareness_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Hunting_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Hunting_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Hunting_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Hunting_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Hunting_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Hunting_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Hunting_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Hunting_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Hunting_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Hunting_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Hunting_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Hunting_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Song_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Song_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Song_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Song_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Song_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Song_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Song_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Song_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Song_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Song_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Song_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Song_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Craft_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Craft_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Craft_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Craft_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Craft_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Craft_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Craft_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Craft_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Craft_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Craft_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Craft_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Craft_6'] === TRUE) echo "checked=checked"; ?>>
      </div>

      <div id="character_div_skill_2" class="skills">
        <input id="character_favoured_skills_Enhearten" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Enhearten'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Travel" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Travel'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Insight" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Insight'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Healing" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Healing'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Courtesy" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Courtesy'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Battle" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Battle'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Enhearten_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Enhearten_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Enhearten_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Enhearten_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Enhearten_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Enhearten_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Enhearten_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Enhearten_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Enhearten_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Enhearten_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Enhearten_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Enhearten_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Travel_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Travel_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Travel_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Travel_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Travel_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Travel_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Travel_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Travel_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Travel_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Travel_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Travel_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Travel_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Insight_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Insight_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Insight_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Insight_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Insight_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Insight_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Insight_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Insight_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Insight_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Insight_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Insight_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Insight_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Healing_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Healing_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Healing_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Healing_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Healing_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Healing_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Healing_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Healing_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Healing_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Healing_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Healing_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Healing_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Courtesy_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Courtesy_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Courtesy_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Courtesy_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Courtesy_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Courtesy_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Courtesy_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Courtesy_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Courtesy_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Courtesy_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Courtesy_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Courtesy_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Battle_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Battle_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Battle_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Battle_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Battle_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Battle_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Battle_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Battle_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Battle_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Battle_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Battle_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Battle_6'] === TRUE) echo "checked=checked"; ?>>
      </div>

      <div id="character_div_skill_3" class="skills">
        <input id="character_favoured_skills_Persuade" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Persuade'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Stealth" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Stealth'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Scan" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Scan'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Explore" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Explore'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Riddle" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Riddle'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_favoured_skills_Lore" type="checkbox" class="marcador" <?php if ($obj['character_favoured_skills_Lore'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Persuade_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Persuade_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Persuade_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Persuade_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Persuade_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Persuade_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Persuade_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Persuade_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Persuade_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Persuade_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Persuade_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Persuade_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Stealth_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Stealth_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Stealth_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Stealth_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Stealth_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Stealth_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Stealth_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Stealth_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Stealth_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Stealth_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Stealth_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Stealth_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Scan_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Scan_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Scan_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Scan_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Scan_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Scan_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Scan_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Scan_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Scan_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Scan_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Scan_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Scan_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Explore_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Explore_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Explore_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Explore_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Explore_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Explore_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Explore_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Explore_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Explore_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Explore_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Explore_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Explore_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Riddle_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Riddle_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Riddle_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Riddle_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Riddle_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Riddle_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Riddle_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Riddle_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Riddle_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Riddle_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Riddle_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Riddle_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_skills_Lore_1" type="checkbox" class="marcador" <?php if ($obj['character_skills_Lore_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Lore_2" type="checkbox" class="marcador" <?php if ($obj['character_skills_Lore_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Lore_3" type="checkbox" class="marcador" <?php if ($obj['character_skills_Lore_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Lore_4" type="checkbox" class="marcador" <?php if ($obj['character_skills_Lore_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Lore_5" type="checkbox" class="marcador" <?php if ($obj['character_skills_Lore_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_skills_Lore_6" type="checkbox" class="marcador" <?php if ($obj['character_skills_Lore_6'] === TRUE) echo "checked=checked"; ?>>
      </div>

      <div id="character_div_proficience" class="skills">
        <input id="character_combat_proficiencies_Axes_1" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Axes_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Axes_2" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Axes_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Axes_3" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Axes_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Axes_4" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Axes_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Axes_5" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Axes_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Axes_6" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Axes_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_combat_proficiencies_Bows_1" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Bows_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Bows_2" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Bows_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Bows_3" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Bows_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Bows_4" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Bows_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Bows_5" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Bows_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Bows_6" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Bows_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_combat_proficiencies_Spears_1" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Spears_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Spears_2" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Spears_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Spears_3" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Spears_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Spears_4" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Spears_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Spears_5" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Spears_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Spears_6" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Spears_6'] === TRUE) echo "checked=checked"; ?>>

        <input id="character_combat_proficiencies_Swords_1" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Swords_1'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Swords_2" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Swords_2'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Swords_3" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Swords_3'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Swords_4" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Swords_4'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Swords_5" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Swords_5'] === TRUE) echo "checked=checked"; ?>>
        <input id="character_combat_proficiencies_Swords_6" type="checkbox" class="marcador" <?php if ($obj['character_combat_proficiencies_Swords_6'] === TRUE) echo "checked=checked"; ?>>
      </div>

      <textarea id="character_rewards" rows="6" cols="29"><?=$obj['character_rewards']?></textarea>
      <input id="character_valour" type="text" value="<?=$obj['character_valour']?>">

      <textarea id="character_virtues" rows="6" cols="29"><?=$obj['character_virtues']?></textarea>
      <input id="character_wisdow" type="text" value="<?=$obj['character_wisdow']?>">

      <div id="character_div_weapon_0" class="skills">
        <input id="character_war_gear_0_name" type="text" value="<?=$obj['character_war_gear_0_name']?>">
        <input id="character_war_gear_0_damage" type="text" value="<?=$obj['character_war_gear_0_damage']?>">
        <input id="character_war_gear_0_injury" type="text" value="<?=$obj['character_war_gear_0_injury']?>">
        <input id="character_war_gear_0_load" type="text" value="<?=$obj['character_war_gear_0_load']?>">
        <input id="character_war_gear_0_notes" type="text" value="<?=$obj['character_war_gear_0_notes']?>">
      </div>

      <div id="character_div_weapon_1" class="skills">
        <input id="character_war_gear_1_name" type="text" value="<?=$obj['character_war_gear_1_name']?>">
        <input id="character_war_gear_1_damage" type="text" value="<?=$obj['character_war_gear_1_damage']?>">
        <input id="character_war_gear_1_injury" type="text" value="<?=$obj['character_war_gear_1_injury']?>">
        <input id="character_war_gear_1_load" type="text" value="<?=$obj['character_war_gear_1_load']?>">
        <input id="character_war_gear_1_notes" type="text" value="<?=$obj['character_war_gear_1_notes']?>">
      </div>

      <div id="character_div_weapon_2" class="skills">
        <input id="character_war_gear_2_name" type="text" value="<?=$obj['character_war_gear_2_name']?>">
        <input id="character_war_gear_2_damage" type="text" value="<?=$obj['character_war_gear_2_damage']?>">
        <input id="character_war_gear_2_injury" type="text" value="<?=$obj['character_war_gear_2_injury']?>">
        <input id="character_war_gear_2_load" type="text" value="<?=$obj['character_war_gear_2_load']?>">
        <input id="character_war_gear_2_notes" type="text" value="<?=$obj['character_war_gear_2_notes']?>">
      </div>

      <div id="character_div_weapon_3" class="skills">
        <input id="character_war_gear_3_name" type="text" value="<?=$obj['character_war_gear_3_name']?>">
        <input id="character_war_gear_3_damage" type="text" value="<?=$obj['character_war_gear_3_damage']?>">
        <input id="character_war_gear_3_injury" type="text" value="<?=$obj['character_war_gear_3_injury']?>">
        <input id="character_war_gear_3_load" type="text" value="<?=$obj['character_war_gear_3_load']?>">
        <input id="character_war_gear_3_notes" type="text" value="<?=$obj['character_war_gear_3_notes']?>">
      </div>

      <div id="character_div_armour" class="skills">
        <input id="character_armour_name" type="text" value="<?=$obj['character_armour_name']?>">
        <input id="character_armour_protection" type="text" value="<?=$obj['character_armour_protection']?>">
        <input id="character_armour_load" type="text" value="<?=$obj['character_armour_load']?>">
      </div>

      <div id="character_div_helm" class="skills">
        <input id="character_helm_name" type="text" value="<?=$obj['character_helm_name']?>">
        <input id="character_helm_protection" type="text" value="<?=$obj['character_helm_protection']?>">
        <input id="character_helm_load" type="text" value="<?=$obj['character_helm_load']?>">
      </div>

      <div id="character_div_shield" class="skills">
        <input id="character_shield_name" type="text" value="<?=$obj['character_shield_name']?>">
        <input id="character_shield_parry_modifier" type="text" value="<?=$obj['character_shield_parry_modifier']?>">
        <input id="character_shield_load" type="text" value="<?=$obj['character_shield_load']?>">
      </div>

      <input id="character_current_stats_adventure_points" type="text" value="<?=$obj['character_current_stats_adventure_points']?>">
      <input id="character_current_stats_skill_points" type="text" value="<?=$obj['character_current_stats_skill_points']?>">
      <input id="character_current_stats_fellowship_score" type="text" value="<?=$obj['character_current_stats_fellowship_score']?>">

      <div id="character_div_endurance" class="attributes">
        <input id="character_current_stats_load" type="text" value="<?=$obj['character_current_stats_load']?>">
        <input id="character_current_stats_current_endurance" type="text" value="<?=$obj['character_current_stats_current_endurance']?>">
        <input id="character_current_stats_fatigue" type="text" value="<?=$obj['character_current_stats_fatigue']?>">
      </div>

      <div id="character_div_hope" class="attributes">
        <input id="character_current_stats_shadow" type="text" value="<?=$obj['character_current_stats_shadow']?>">
        <input id="character_current_stats_current_hope" type="text" value="<?=$obj['character_current_stats_current_hope']?>">
        <input id="character_current_stats_shadow_scars" type="text" value="<?=$obj['character_current_stats_shadow_scars']?>">
      </div>

      <input id="character_current_stats_weary" type="checkbox" class="marcador" <?php if ($obj['character_current_stats_weary'] === TRUE) echo "checked=checked"; ?>>
      <input id="character_current_stats_miserable" type="checkbox" class="marcador" <?php if ($obj['character_current_stats_miserable'] === TRUE) echo "checked=checked"; ?>>
      <input id="character_current_stats_wounded" type="checkbox" class="marcador" <?php if ($obj['character_current_stats_wounded'] === TRUE) echo "checked=checked"; ?>>
      <input id="character_current_stats_injury" type="text" value="<?=$obj['character_current_stats_injury']?>">

      <textarea id="character_notes" rows="7" cols="33"><?=$obj['character_notes']?></textarea>
</div>
